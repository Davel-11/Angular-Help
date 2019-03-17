import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-help',
  templateUrl: './angular-help.component.html',
  styleUrls: ['./angular-help.component.css']
})
export class AngularHelpComponent implements OnInit {

  @ViewChild('myValue2') myValue2 : ElementRef;

  constructor() { }

  ngOnInit() {



  }

  // GETTING HTML INPUT ELEMENT 
  getValue(inputValue: HTMLInputElement) {
    console.log("my value is ", inputValue.value  )
  }

  getChild() {
      console.log('el Valor de View Child is :', this.myValue2.nativeElement.value );
  }

}
