import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ToDoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasebd: AngularFireDatabase) { }

getToDoList() {
  this.toDoList = this.firebasebd.list('titles');
  return this.toDoList;
}

addTitle(title: string) {
  this.toDoList.push({
    title: title,
    isChecked: false
  });

}

checkOrUnCheckTitle($key: string, flag: boolean) {
  this.toDoList.update($key, { isChecked:flag });
}

removeTitle($key: string) {
  this.toDoList.remove($key);
}


}

