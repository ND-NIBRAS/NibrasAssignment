import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() Name = 'Lorem Epsum';
  @Input() Designation = 'Head of marketing at K mart';

  constructor() { }

  ngOnInit(): void {
  }

}
