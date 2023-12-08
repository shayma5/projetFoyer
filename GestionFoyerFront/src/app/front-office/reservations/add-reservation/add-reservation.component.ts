import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  
    reservationForm!:FormGroup;
  
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      universityName: ['', Validators.required],
      foyerName: ['', Validators.required],
      schoolYear: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      // Perform the form submission logic here
      console.log('Form submitted:', this.reservationForm.value);
      // You can call your backend API to handle the reservation
    } else {
      // Form is invalid, show an error or handle accordingly
      console.log('Form is invalid');
    }
  }
}