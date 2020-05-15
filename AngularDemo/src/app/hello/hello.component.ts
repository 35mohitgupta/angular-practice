import { Component, OnInit } from '@angular/core';

// Let us now understand the basic elements of template syntax:

// 1. HTML
// 2. Interpolation - {{courseName}}
// 3. Template Expressions
// 4. Template Statements

// A template reference variable is often a reference to a DOM element within a template. It can also be a reference to an Angular component or directive or even a web component.

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  template: `<h1>Template</h1>

            <!-- To check for null we can use ? in interpolation. -->
            <p>Course name - {{courseName?.substr(2,5)}}</p>
  
            <!-- Template Expression -->
            <p> Welcome {{ 'hello'.substr(2,3) }} </p>
            <!--  You cannot use  ;, ++, --, new , +=, -= in a template expression. -->
            
            
            <!-- Template Statement -->
            <h4>Course name - {{courseName}}</h4>
            <p (click) = "changeName()">Click here to change the course</p>

            <!-- Template Variable -->
            <!-- inp refers to the input element; pass its 'value to an event handler -->
            <input #inp (keyup)="show(inp.value)" placeholder="enter the course name" >
            `,
            
  // styleUrls: ['./hello.component.css']
  styles: [`p { color: red; }`]
})
export class HelloComponent implements OnInit {

  courseName: string = 'Angular'

  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    this.courseName = 'Angular 9';
  }

  show(course: string){
    console.log(course)
    this.courseName = course;
    console.log(course)
  }

}
