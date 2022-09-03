import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/dto/Post';
import { MyService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Posts: Array<Post>;
  constructor(private myService: MyService) {
    this.Posts = new Array<Post>();
   }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(){
    let that = this;

    that.myService.getPosts().subscribe((posts: Post[]) => {
      that.Posts = posts;
    });
  }

}
