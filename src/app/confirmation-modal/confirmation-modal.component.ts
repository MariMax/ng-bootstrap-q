import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ConfirmatioModalComponent {
  @Input() text = '';
  @Input() title = 'Confirm action';
  @Input() agreeText = 'Yes';
  @Input() rejectText = 'No';

  constructor(public activeModal: NgbActiveModal) {
  }
}
