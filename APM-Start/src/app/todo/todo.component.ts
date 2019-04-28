import { Component, OnInit } from '@angular/core';
import { ToDoService } from './shared/todo.service';
@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [ToDoService]
})
export class ToDoComponent implements OnInit {
  toDoListArray: any[];
  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
// tslint:disable-next-line: prefer-const
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.toDoListArray.push(x);
      });

      this.toDoListArray.sort((a, b) => {
        return a.isChecked - b.isChecked;
      });
    });
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  onDelete($key: string) {
      this.toDoService.removeTitle($key);
  }

  alterCheck($key: string, isChecked) {
    this.toDoService.checkOrUnCheckTitle($key, !isChecked);
  }
}
