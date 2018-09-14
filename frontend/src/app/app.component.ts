import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
  tasks = ['Write angular tutorial', 'panic', 'Nevermind, all g!'];

  addTask(newTask: string) {
    this.tasks.push(newTask);
  }

  removeTask(task) {

    console.log(task);
    
    var index = this.tasks.indexOf(task);
    if (index == -1) console.log("f");
    this.tasks.splice(index,1);
  }
}
