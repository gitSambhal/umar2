import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LessonModalComponent } from './lesson-modal/lesson-modal.component';
import { FirestorageService } from './service/firestorage.service';
import { FirestoreService } from './service/firestore.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    NgbModule.forRoot()
    ],
    entryComponents: [LessonModalComponent],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    LessonModalComponent
    ],
  providers: [FirestorageService, FirestoreService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
