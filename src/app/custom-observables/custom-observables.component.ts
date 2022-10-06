import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.css'],
})
export class CustomObservablesComponent implements OnInit {
  //Observable is a kind of datasource which supports the data share
  //between the observer and subscriber

  constructor() {}

  SimOffers: any = [];
  //output = [];
  ngOnInit(): void {
    //this.SimOffers = ['100₹', '200₹', '300₹'];

    this.SimOffers = 0;

    const SimObservable = new Observable<any>((observer) => {
      setInterval(() => {
        this.SimOffers = this.SimOffers + 100;
        if (this.SimOffers == 500) {
          observer.complete();
        }
        if (this.SimOffers == 300) {
          observer.error(new Error('Got the some error in DB'));
        }
        observer.next(this.SimOffers + '₹');
      }, 1000);
    });

    SimObservable.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(
          error +
            ' You have received the some bad data..So that some exception is happening'
        );
      },
      () => {
        console.log('Operation has completed');
      }
    );

    const moviesList = [
      'KGF',
      'Bahubali',
      new Error('some error in Db'),
      null,
      undefined,
      'Movie3',
    ];

    const movieProvider = new Observable<any>((observer) => {
      moviesList.forEach((movieName: any) => {
        if (movieName?.message === 'some error in Db'){
          observer.error('Getting some excpetion from the DB........🥺🥺🥺');
        }
        observer.next(movieName + "😊😊😊");
      });
    });

    movieProvider.subscribe(
      (response) => {
        console.log('I am watching ' + response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
