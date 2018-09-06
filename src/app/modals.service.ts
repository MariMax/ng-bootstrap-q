import { ConfirmatioModalComponent } from './confirmation-modal/confirmation-modal.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(private modals: NgbModal) { }

  public openConfirmation(bindings: { text: string, title?: string, agreeText?: string, rejectText?: string }): Promise<string> {
    const ref = this.modals.open(ConfirmatioModalComponent);
    Object.assign(ref.componentInstance, bindings);
    return ref.result;
  }
}
