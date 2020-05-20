import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  data: Observable<number>;
  myObservable:Observable<number[]> = of([1,2,3],[4,5,6],[7,8,9]);
  myArray: number[] = [];
  errors: boolean;
  finished: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  fetchedData(){
    this.data = new Observable(observer => {
      setTimeout(()=> observer.next(1),1000);
      setTimeout(()=> observer.next(2),2000)
      setTimeout(()=> observer.complete(),3000)
    });

    this.data.subscribe( value => this.myArray.push(value),
    error => this.errors = true);

    this.myObservable.subscribe( value => this.myArray.push(value[1]),
    error => this.errors = true,
    () => this.finished=true);

  }

}
