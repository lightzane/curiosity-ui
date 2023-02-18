import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { FavoriteDto, LoginDto, WriteDto } from '../dto';
import { Curiosity, User } from '../models';

const API_USER = `api/user`;
const API_CURIOSITY = `api/curiosity`;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  private readonly err = (err: HttpErrorResponse) => {
    if (err) {
      this.snackbar.open(`SERVER ERROR: ${err.status} - ${err.statusText}`, 'ERROR');
    }
    return throwError(() => err);
  };

  private readonly checkExistence = (res: Curiosity) => {
    if (!res) {
      this.snackbar.open('This item was not found anymore...', 'OKAY');
    }
  };

  register(input: LoginDto): Observable<boolean> {
    return this.http.post<boolean>(`${API_USER}/register`, input)
      .pipe(
        tap(res => {
          if (res) {
            this.snackbar.open('Registration successful! Please login...');
          } else {
            this.snackbar.open('Username not available', 'OKAY');
          }
        }),
        catchError(this.err)
      );
  }

  login(input: LoginDto): Observable<User> {
    return this.http.post<User>(`${API_USER}/login`, input)
      .pipe(
        tap(res => {
          if (res) {
            this.snackbar.open('Login successful');
          } else {
            this.snackbar.open('Login failed...', 'OKAY');
          }
        }),
        catchError(this.err)
      );
  }

  getAllCuriosities(): Observable<Curiosity[]> {
    return this.http.get<Curiosity[]>(`${API_CURIOSITY}/all`)
      .pipe(catchError(this.err));
  }

  writeCuriosity(input: WriteDto): Observable<Curiosity> {
    return this.http.post<Curiosity>(`${API_CURIOSITY}/add`, input)
      .pipe(
        tap(res => {
          if (res) {
            this.snackbar.open('Posted successfully...');
          }
        }),
        catchError(this.err)
      );
  }

  favorite(dto: FavoriteDto): Observable<Curiosity> {
    return this.http.patch<Curiosity>(`${API_CURIOSITY}/favorite`, dto)
      .pipe(
        tap(this.checkExistence),
        catchError(this.err)
      );
  }

  read(curiosityId: string): Observable<Curiosity> {
    return this.http.patch<Curiosity>(`${API_CURIOSITY}/read`, { curiosityId })
      .pipe(
        tap(this.checkExistence),
        catchError(this.err)
      );
  }

}
