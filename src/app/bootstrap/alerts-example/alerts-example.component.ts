import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alerts-example',
  templateUrl: './alerts-example.component.html',
  styleUrls: ['./alerts-example.component.css']
})
export class AlertsExampleComponent implements OnInit {
  @ViewChild('alertForm') alertForm: FormGroup;
  dismissible = true;
  showInput = false;
  type: string;
  msg: string;

  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;

  constructor() { }

  ngOnInit() {
  }

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  crearAlerta() {
    this.alerts.push({ type: this.type, msg: this.msg });
    this.alertForm.reset();
  }

}
