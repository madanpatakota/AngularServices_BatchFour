import { Component , OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-obervables',
  templateUrl: './obervables.component.html',
  styleUrls: ['./obervables.component.css']
})
export class ObervablesComponent implements OnInit{

   //SimOffers = ["100₹", "200₹" , "300₹"];  // Synnchroous data.......

   //Observable

   SimOffers:any = [];

   data:any  = [];
   ngOnInit(){
      this.SimOffers = ["100₹", "200₹" , "300₹"];
      const observable =  from(this.SimOffers);
      observable.subscribe((amount:any)=>{
        this.data.push(amount);
          console.log(amount);
      })
   }
   // Going to convert this simoffers
   // into the observable
   // going to subscribe.
}
