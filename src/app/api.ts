import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Person {
  id!: string;
  name!: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseURL = 'http://localhost:3000/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL + 'people');
  }

  addPerson(person: Person): Observable<any> {
    return this.http.post(this.baseURL + 'people', person, { headers: this.headers });
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.baseURL + 'people/' + person.id, person, { headers: this.headers });
  }

  deletePerson(person: Person): Observable<any> {
    return this.http.delete(this.baseURL + 'people/' + person.id);
  }
}
