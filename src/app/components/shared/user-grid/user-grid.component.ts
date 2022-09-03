import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from 'src/app/dto/Person';
import { MyService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnDestroy, OnInit {
  public dtOptions: DataTables.Settings = {};
  public persons: Array<Person>;
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(private myService: MyService) {
    this.persons = new Array<Person>();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7
    };

    this.getUsers();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private getUsers(){
    let that = this;

    that.myService.getUsers().subscribe(persons => {
      that.persons = persons;
      that.dtTrigger.next(null);
    });
  }

}
