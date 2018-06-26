import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  private message: string;
  private modal: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modal = this.modalService.show(DialogoComponent);
    this.modalService.onHide.subscribe(() => {
      this.message = this.modal.content.mensaje;
    });
  }

  showMessage(message: string) {
    this.message = message;
  }

  closeModal() {
    this.modal.hide();
  }

}
