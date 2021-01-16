import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  paymentGateWayForm : FormGroup;
  pgFormBuilder: FormBuilder;
  constructor() {}

  ngOnInit() {
    this.createPaymentGateWayForm();
  }

  createPaymentGateWayForm() {
    this.paymentGateWayForm = new FormGroup({
      BookingId: new FormControl('', Validators.required),
      Amount: new FormControl('', Validators.required),
    });
  }

  onPGSubmit() {
    console.log(this.paymentGateWayForm);
    // this.paymentGateWayForm.patchValue({'BookingId':1234, 'Amount': 56576});
    // this.paymentGateWayForm.controls['BookingId'].setValue(245);
  }

}
