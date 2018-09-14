  import { Component } from '@angular/core';
  import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'My todo list!';
  // A list of starter tasks
  public tasks = ['Write angular tutorial','I\'s not compiling....','Nevermind, all g!'];

  // Add an task to our task list
  addTask(newTask: string) {
    this.tasks.push(newTask);
  }

  // Remove a tast from our list
  removeTask(task) {
    // Get index of item
    var index = this.tasks.indexOf(task);
    if (index === -1) return;
    // Remove found task
    this.tasks.splice(index,1);
  }
}
