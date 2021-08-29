import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { NutritionFactsComponent } from './components/nutrition-facts/nutrition-facts.component';


@NgModule({
  declarations: [HomeComponent, IngredientsListComponent, NutritionFactsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
