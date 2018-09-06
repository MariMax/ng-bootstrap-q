import { ModalsService } from './../modals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private modalsService: ModalsService) { }

  showModal() {
    this.modalsService.openConfirmation({
      text: 'Can you see it?'
    });
  }
}
