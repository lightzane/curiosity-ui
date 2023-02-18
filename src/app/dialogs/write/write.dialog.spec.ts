import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material/material.module';

import { WriteDialog } from './write.dialog';

describe('WriteDialog', () => {
  let component: WriteDialog;
  let fixture: ComponentFixture<WriteDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteDialog],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WriteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
