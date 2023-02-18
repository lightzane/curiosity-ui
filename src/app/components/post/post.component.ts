import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeIn } from '../../my-animation';
import { FavoriteDto } from '../../shared/dto';
import { Curiosity, User } from '../../shared/models';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class PostComponent implements AfterViewInit {

  @Input() profile?: User;

  @Input() curiosity!: Curiosity;

  isRead = false;

  isFavorite = false;

  constructor(
    private cd: ChangeDetectorRef,
    private http$: HttpService
  ) { }

  ngAfterViewInit(): void {
    this.isFavorite = !!this.curiosity.favorites.find(f => f._id === this.profile?._id);
    this.cd.detectChanges();
    this.cd.detach();
  }

  /** Add to favorites */
  favorite(): void {
    if (!this.profile || !this.curiosity) {
      return;
    }

    const input: FavoriteDto = {
      curiosityId: this.curiosity._id!,
      user: this.profile
    };

    this.http$.favorite(input).subscribe(res => {
      if (res) {
        this.curiosity = res;
        this.isFavorite = !this.isFavorite;
        this.cd.detectChanges();
        this.cd.detach();
      }
    });
  }

  read(): void {

    if (!this.curiosity._id) {
      return;
    }


    this.http$.read(this.curiosity._id).subscribe(res => {
      if (res) {
        this.isRead = true;
        this.curiosity.views++;
        this.cd.detectChanges();
        this.cd.detach();
      }
    });

  }

}
