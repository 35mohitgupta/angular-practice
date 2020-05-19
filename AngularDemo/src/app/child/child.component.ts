import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  username: string;

  newUname: string;

  @Output()
  onChangeUname: EventEmitter<string> = new EventEmitter<string>();

  changeUserName(){
      this.onChangeUname.emit(this.newUname);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
