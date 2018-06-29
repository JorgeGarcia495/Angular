import { Component, OnInit, TemplateRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  @ViewChild(ModalDirective) modal5: ModalDirective;

  subscription: Subscription[] = [];
  messages: string[] = [];
  messages5: string[] = [];

  modal: BsModalRef;
  modal2: BsModalRef;
  modal3: BsModalRef;

  config3 = {
    animated: true,
    class: 'gray modal-lg',
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: false
  };

  constructor(
    private modalService: BsModalService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modal = this.modalService.show(template);
  }

  // Nested modals
  openModal2(template: TemplateRef<any>) {
    this.modal2 = this.modalService.show(template);
  }

  // Modal con eventos
  openModal3(template: TemplateRef<any>) {
    this.messages = [];

    const _combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden,
    ).subscribe(() => this.changeDetector.markForCheck());

    this.subscription.push(this.modalService.onShow.subscribe((reason: string) => {
      this.messages.push('OnShow event has been fired');
    }));

    this.subscription.push(this.modalService.onShown.subscribe((reason: string) => {
      this.messages.push('OnShown event has been fired');
    }));

    this.subscription.push(this.modalService.onHide.subscribe((reason: string) => {
      const _reason = reason ? `, dismissed by ${reason}` : '';
      this.messages.push(`onHide event has been fired${_reason}`);
    }));

    this.subscription.push(this.modalService.onHidden.subscribe((reason: string) => {
      const _reason = reason ? `, dismissed by ${reason}` : '';
      this.messages.push(`onHidden event has been fired${_reason}`);
      this.unsubscribe();
    })
    );

    this.subscription.push(_combine);

    this.modal3 = this.modalService.show(template, this.config3);

  }

  unsubscribe() {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscription = [];
  }


  // Modal con eventos
  showModal() {
    this.messages5 = [];
    this.modal5.show();
  }

  handler(type: string, $event: ModalDirective) {
    this.messages5.push(
      `event ${type} is fired${$event.dismissReason
        ? ', dismissed by ' + $event.dismissReason
        : ''}`
    );
  }

}
