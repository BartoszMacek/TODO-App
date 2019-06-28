import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskNumber = 0;

  taskList: Array<number> = [];


  onAddTask() {
    this.taskNumber = this.taskNumber + 1;
    this.taskList.push(this.taskNumber);
    console.log(this.taskNumber);
  }

  onRemove() {
    if (this.taskNumber > 0) {
      this.taskList.splice(this.taskNumber - 1);
      this.taskNumber = this.taskNumber - 1;
    }
  }

  onClear() {
    this.taskList = [];
    this.taskNumber = 0;
  }
}
