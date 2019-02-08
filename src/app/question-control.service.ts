import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};
    let validaciones = [];
    questions.forEach(question => {
      if (question.required) {
        validaciones.push(Validators.required);
      }
      // Validación para solo números
      if (question.number) {
        validaciones.push(Validators.pattern(/^([0-9])*$/));
      }

      group[question.key] = new FormControl(question.value || '', validaciones);
      validaciones = [];

    });

    return new FormGroup(group);
  }
}
