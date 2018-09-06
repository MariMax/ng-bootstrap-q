import { ConfirmatioModalComponent } from './../confirmation-modal/confirmation-modal.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ])
  ],
  declarations: [AboutComponent, ConfirmatioModalComponent],
  entryComponents: [ConfirmatioModalComponent]
})
export class AboutModule { }
