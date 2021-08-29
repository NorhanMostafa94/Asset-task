import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.scss']
})
export class NutritionFactsComponent implements OnInit {

  @Input() totalNutrients;
  @Input() totalDaily;
  @Input() calories;

  constructor() { }

  ngOnInit(): void {
  }

}
