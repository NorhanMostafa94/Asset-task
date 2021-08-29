import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldControl } from 'src/app/shared/models/field-control';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nutritionFormGroup: FormGroup;
  nutritionControl: FieldControl = {
    id: 'nutrition',
    name: 'nutrition',
    formControlName: 'nutrition',
    value: '',
    placeholder: 'Enter Recipe Ingredients',
    type: 'textarea',
    contentType: 'text'
  }

  analysedList = [];
  totalNutrients;
  totalDaily;
  calories;

  constructor(private homeService: HomeService
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initiateNutritionForm();
  }

  /**
   * `initiateNutritionForm()` to initiate form
   */
  initiateNutritionForm() {
    this.nutritionFormGroup = this.formBuilder.group({
      'nutrition': this.formBuilder.control(null, [Validators.required])
    });
  }

  analyse() {
    let ingredients = this.nutritionFormGroup.get('nutrition').value.split('\n');
    this.homeService.getNutrition(ingredients).subscribe((res: any) => {
      this.analysedList = res.ingredients;
      this.totalNutrients = res.totalNutrients;
      this.totalDaily = res.totalDaily;
      this.calories = res.calories;
    });
  }

}
