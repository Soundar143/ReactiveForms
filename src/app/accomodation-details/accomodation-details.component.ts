import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation-details',
  templateUrl: './accomodation-details.component.html',
  styleUrls: ['./accomodation-details.component.css']
})
export class AccomodationDetailsComponent implements OnInit {

  accomodationDetailsForm: FormGroup;
  roomType: FormGroup;
  Cities: string[] = ['--Select the city--', 'Chennai', 'Coimbatore', 'Bangalore', 'Hyderabad'];
  Ratings: string[] = ['--Select a rating--', '1', '2', '3', '4', '5'];
  Hotels: string[] = ['--Select a hotel--', 'Brindavan', 'Grand Chozha', 'Paradise']
  constructor() { }

  ngOnInit(): void {
    this.createAccomodationForm();
  }

  createAccomodationForm() {
    this.accomodationDetailsForm = new FormGroup({
      BookingId: new FormControl('', Validators.required),
      City: new FormControl('--Select the city--', [Validators.required, Validators.maxLength(50)]),
      HotelRatings: new FormControl('--Select a rating--', [Validators.required, this.checkRatings]),
      Hotels: new FormControl('--Select a hotel--', [Validators.required, Validators.maxLength(60)]),
      NumberOfRooms: new FormControl(4, [Validators.required, this.checkNumberofRooms]),
      EstimatedCost: new FormControl('', [Validators.required, this.checkNumberofRooms])
    });
    this.roomType = new FormGroup({
      RoomType: new FormControl('Single', [Validators.required, Validators.maxLength(6)])
    });
  }

  checkNumberofRooms(control: FormControl) {
    if (control.value < 0) {
      return {
        negativeError : {
          message: "Enter value greater than zero"
        }
      };
    }
  }

checkRatings(control: FormControl) {
    if (control.value < 0 && control.value > 5) {
      return {
        ratingError : {
          message: "Enter value between one and five"
        }
      };
    }
  }
  onAccomodationSubmit() {

  }

}
