import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  imgUrl: string = './assets/images/favicon.ico'
  rowspn: string = '2';
  isColorful: boolean = true;
  isSmall: boolean = false;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(message: string){
    alert(message)
  }

}
