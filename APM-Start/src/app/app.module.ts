import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
