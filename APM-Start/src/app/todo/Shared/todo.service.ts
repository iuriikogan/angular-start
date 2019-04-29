import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
  // define export component ToDoService
@Injectable()
export class ToDoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasebd: AngularFireDatabase) { }

    // get toDoList from db and save local var this.toDoList as an array
    
getToDoList() {
  this.toDoList = this.firebasebd.list('titles');
  return this.toDoList;
}
  // add task, only props are title and is checked(completed)
addTitle(title: string) {
  this.toDoList.push({
    title: title,
    isChecked: false
  });

}
  // update the db for checked toggle

checkOrUnCheckTitle($key: string, flag: boolean) {
  this.toDoList.update($key, { isChecked: flag });
}

  // Delete Task

removeTitle($key: string) {
  this.toDoList.remove($key);
}


}

