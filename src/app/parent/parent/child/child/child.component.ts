import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title :string= "Child Component Class..!!"
  constructor() { }

  ngOnInit(): void {
    console.log("I am in child component..!!")
  }

}
