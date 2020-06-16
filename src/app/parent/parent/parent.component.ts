import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import{ChildComponent} from './child/child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
@ViewChild('nameRef') nameRef :ElementRef;
@ViewChild('title') titleRef :ElementRef;
@ViewChild('childtemplateRef') childRef :ChildComponent;
// @ViewChild(ChildComponent) childRef2 :ChildComponent;
@ViewChild('childtemplateRef',{read:ElementRef}) childwithArgs :ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    console.log("Input field Value->",this.childwithArgs.title)
    console.log("Input field Value->",this.childRef.ngOnInit)
    console.log("Input field Value->"+this.nameRef.nativeElement.value)
    console.log("Input field Value->",this.titleRef.nativeElement)
  }

}
