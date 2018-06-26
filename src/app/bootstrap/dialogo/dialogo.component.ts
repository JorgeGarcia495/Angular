import { Component, OnInit, Output, TemplateRef, EventEmitter, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  private mensaje: string;

  constructor(private modal: BsModalRef,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  setStupidMessage() {
    this.mensaje = 'Fired!';
  }

  setAwesomeMessage() {
    this.mensaje = 'Que fired, cojones!';
  }
}
