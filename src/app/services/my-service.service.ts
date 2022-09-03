import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../dto/Person';
import { Post } from '../dto/Post';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  private apiUrl: string;

  constructor(private _http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getUsers(): Observable<Person[]> {
    return this._http.get<Person[]>(`${this.apiUrl}/users`);
  }

  public getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.apiUrl}/posts`);
  }
}
