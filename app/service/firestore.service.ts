import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Lesson } from "../models/lesson.model";

@Injectable()
export class FirestoreService {

  lessonCollection: AngularFirestoreCollection<Lesson>;
  lessonDoc: AngularFirestoreDocument<Lesson>;
  lessons: Observable<Lesson[]>;
  lesson: Observable<Lesson>;

  constructor(private afStore: AngularFirestore) {
    this.lessonCollection = afStore.collection<Lesson>('Lesson');
  }

  getLessons(): Observable<Lesson[]> {
    this.lessons = this.lessonCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Lesson;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.lessons;
  }

  getLessonDetails(id: string): Observable<Lesson> {
    this.lessonDoc = this.afStore.doc<Lesson>(`Lesson/${id}`);
    this.lesson = this.lessonDoc.valueChanges();
    return this.lesson;
  }

  addLesson(lesson: Lesson) {
    this.lessonCollection.add(lesson);
  }

  updateLesson(id: string, lesson: Lesson) {
    this.lessonDoc = this.afStore.doc(`Lesson/${id}`);
    this.lessonDoc.update(lesson);
  }
//original
  deleteLesson(id: string) {
    this.lessonDoc = this.afStore.doc(`Lesson/${id}`);
    this.lessonDoc.delete();
  }
}

