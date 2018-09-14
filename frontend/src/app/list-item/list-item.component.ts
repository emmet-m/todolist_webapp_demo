import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  // If we wanted to do a binding, we would use this
  @Input() task: string;

  public completed: boolean;

  // Doesn't do anything here
  constructor() {}

  // Will be run once, for initialisation if we choose not to use
  // A constructor
  ngOnInit() {
    this.completed = false;
  }
}
