import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Curiosity } from '../../shared/models';
import { StateService } from '../../shared/services/state.service';
import { SubscriptionsContainer } from '../../shared/utils';

@Component({
  selector: 'app-write',
  templateUrl: './write.dialog.html',
  styleUrls: ['./write.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteDialog implements OnDestroy {

  writeForm: FormGroup;

  isHandset = false;

  private subs = new SubscriptionsContainer();

  constructor(
    private dialogRef: MatDialogRef<WriteDialog, Curiosity>,
    private state$: StateService,
    private fb: FormBuilder
  ) {

    this.subs.add = this.state$.isHandset$.subscribe(v => {
      this.isHandset = v;
      const size = v ? '100vw' : '50vw';
      this.dialogRef.updateSize(size);
    });

    this.writeForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]]
    });

  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  post(): void {
    this.dialogRef.close(this.writeForm.value);
  }

}
