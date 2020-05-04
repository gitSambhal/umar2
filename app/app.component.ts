import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from "./service/firestore.service";
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lesson } from "./models/lesson.model";
import { LessonModalComponent } from './lesson-modal/lesson-modal.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  lessons: Lesson[];

  constructor(private modalService: NgbModal, private afs: AngularFirestore, private fireStore: FirestoreService) {
    this.fireStore.getLessons().subscribe(lessons => {
      this.lessons = lessons;
    });
  }

  ngOnInit() {
  }

  sortedLessonCards(): Lesson[] {
    //ascending sorted array by the object week: number. 
    //descending sorted array would be => a.week - b.week this instead of current code.
    return this.lessons.sort((a: Lesson, b: Lesson) => a.week - b.week);
  }
  open(lesson: Lesson) {
    const modalRef = this.modalService.open(LessonModalComponent);
    modalRef.componentInstance.lesson = lesson;
  }

}
