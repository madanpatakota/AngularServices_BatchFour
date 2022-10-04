import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-one',
  templateUrl: './pipes-one.component.html',
  styleUrls: ['./pipes-one.component.css'],
})
export class PipesOneComponent implements OnInit {
  constructor() {}

  name = `Angular is a platform for 
  building mobile and desktop web 
  applications. Join the community
   of millions of developers who build
   compelling user interfaces`;

  // first 3 letter and ....

  status = 'ACTIVE';

  customers = [
    'Customer A',
    'Customer B',
    'Customer C',
    'Customer D',
    'Customer E',
  ];

  products = ["product A" ,
   "prodcut b",
    "product c"]

  todayDate = new Date();
  ngOnInit(): void {}
}
