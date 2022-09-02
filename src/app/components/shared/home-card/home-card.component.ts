import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() Amount = '595';
  @Input() Description = 'Total Orders';
  @Input() IsMuted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
