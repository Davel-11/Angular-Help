import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-help',
  templateUrl: './angular-help.component.html',
  styleUrls: ['./angular-help.component.css']
})
export class AngularHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {



  }

  // GETTING HTML INPUT ELEMENT 
  getValue(inputValue: HTMLInputElement) {
    console.log("my value is", inputValue.value  )
  }

}
