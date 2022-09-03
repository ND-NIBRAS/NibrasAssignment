import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/dto/Person';
import { MyService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public Persons: Array<Person>;
  public TotalUser: number;

  constructor(private myService: MyService) {
    this.TotalUser = 12;
    this.Persons = new Array<Person>();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    let that = this;

    that.myService.getUsers().subscribe((persons) => {
      that.Persons = persons;
      that.TotalUser = persons ? persons.length : 12;
    });
  }
}
