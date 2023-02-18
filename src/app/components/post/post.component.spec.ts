import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';
import { DateAgoPipe } from '../../shared/pipes/date-ago.pipe';
import { ViewsPipe } from '../../shared/pipes/views.pipe';
import { HttpService } from '../../shared/services/http.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent, DateAgoPipe, ViewsPipe],
      imports: [MaterialModule],
      providers: [
        {
          provide: HttpService,
          useValue: {}
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
