import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  @Input('list') list: [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
