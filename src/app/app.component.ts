import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios-dinamicos';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
