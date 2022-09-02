import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {

  @Input() Heading = 'This is the top message';
  @Input() Description = 'This is a really long string that will be shared between the actual scenations of the past and the prsent. Let\'s assume that there are no actual persons in the world but you have to endure it.';

  constructor() { }

  ngOnInit(): void {
  }

}
