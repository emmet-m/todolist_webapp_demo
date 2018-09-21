import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  // @Input enables us to bind values into this variable
  @Input() task: string;

  // Is this task completed?
  public isCompleted: boolean;

  // Doesn't do anything here
  constructor() {}

  // TODO: Create a method to 'complete' a task when it's clicked.
  // You will have to have more input fields in this class to do that...

  // Will be run once, for initialisation if we choose not to use
  // A constructor
  ngOnInit() {
    this.isCompleted = false;
  }
}
