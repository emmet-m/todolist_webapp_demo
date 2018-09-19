import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';

// The component decorator that defines the following class
//  as a component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The URL of the backend
  private SERVER_URL: string = "http://localhost:3000";

  // A title!
  public title = 'My todo list!';
  // A list of starter tasks
  public tasks: Array<object> = [];

  // Angular will initialise our class with a HttpClient to use, accessed by
  // the variable http
  constructor(private http: HttpClient) {}

  // Add an task to our task list
  addTask(newTask: string) {
    this.tasks.push({"id": null, "value": newTask});
  }

  // Remove a tast from our list
  removeTask(task) {
    // Get index of item
    var index = this.tasks.indexOf(task);
    if (index === -1) return;
    // Remove found task
    this.tasks.splice(index,1);
  }

  // Fetches a task from the server
  fetchTask(task) {
    this.http.get(this.SERVER_URL + "/todo/get/" + task).subscribe(
      // With our response object, push it into our tasks with it's
      // ID and value.
      (resp: object) => {
        this.tasks.push({"id": task, "value": resp["value"]});
      }
    );
  }

  // The 'on init' function is called ONCE at startup,
  //  similar to a constructor.
  // This function is useful for setting up the state of your class...
  ngOnInit(){
    // Get a list of task id's from the server
    this.http.get(this.SERVER_URL + "/todo/list").subscribe(
      // Our response should be an array of objects
      (resp: Array<object>) => {
        // For every task, fetch it's content
        for (var t in resp) {
          this.fetchTask(resp[t]);
        }
      }
    );
  }
}
