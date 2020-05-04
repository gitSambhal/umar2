import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from "../models/lesson.model";

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lesson-modal',
  templateUrl: './lesson-modal.component.html',
  styleUrls: ['./lesson-modal.component.css']
})

export class LessonModalComponent {
@Input() lesson: Lesson;
  constructor(public activeModal: NgbActiveModal) { }


}