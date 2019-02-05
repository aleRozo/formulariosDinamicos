import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../question-base';
import { QuestionControlService } from '../../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log('forma \n',this.form);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log('payload', this.payLoad);
    console.log(this.form.value);
  }
}