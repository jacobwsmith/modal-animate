import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalToastService {
  constructor(private ngbModal: NgbModal) { }

  open(content: any) {

    // hard code the config/styles/animations
    const modal = this.ngbModal.open(content, {
      windowClass: 'modal--animate',
      keyboard: false,
      backdrop: 'static'
    });
    const instance = (modal as any)._windowCmptRef.instance;

    const fx = (modal as any)._removeModalElements.bind(modal);
    (modal as any)._removeModalElements = () => {
      instance.windowClass = 'modal--animate modal--animate-hide';
      setTimeout(fx, 400);
    };

    return modal;
  }


}
