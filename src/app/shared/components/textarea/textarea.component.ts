import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControl } from '../../models/field-control';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() field: FieldControl;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
