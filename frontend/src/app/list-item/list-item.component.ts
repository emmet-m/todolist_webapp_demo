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

  // Will be run once, for initialisation if we choose not to use
  // A constructor
  ngOnInit() {
    this.isCompleted = false;
  }
}
