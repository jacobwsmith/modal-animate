import { Component, Injectable } from '@angular/core';

 // new modalToastService that hard codes the config
 // and adds the proper animations
import { ModalToastService} from './modal-toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ModalToastService ]
})
export class AppComponent {

  modalRef;

  constructor(
    private modalToastService: ModalToastService
  ) { }

  open(content) {
    this.modalRef = this.modalToastService.open(content);
  }

  close() {
    console.log('--- close ---');
    this.modalRef.close();
  }

  save() {
    console.log('--- save ---');
    this.modalRef.close();
  }

}
