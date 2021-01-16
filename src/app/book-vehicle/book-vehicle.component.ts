import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-vehicle',
  templateUrl: './book-vehicle.component.html',
  styleUrls: ['./book-vehicle.component.css']
})
export class BookVehicleComponent implements OnInit {
  bookVehicleForm: FormGroup;
  timeSlots: string[] = ['--Time Slot--','5-7', '7-8', '9-10'];
  constructor() { }

  ngOnInit(): void {
    this.createBookVehicleForm();
  }

  createBookVehicleForm() {
    this.bookVehicleForm = new FormGroup({
      VehicleName: new FormControl('', Validators.required),
      NumberOfHours: new FormControl('', Validators.required),
      BookForDate: new FormControl(new Date(), Validators.required),
      EstimatedNumberOfKm: new FormControl('', Validators.required),
      PickUpTime: new FormControl('--Time Slot--', Validators.required),
      EstimatedCost: new FormControl('', Validators.required),
    });
  }

}
