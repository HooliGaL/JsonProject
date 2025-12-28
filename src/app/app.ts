import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Person } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  title = 'HttpClient Methods';

  people: Person[] = [];
  person: Person = new Person();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.refreshPeople();
  }

  refreshPeople(): void {
    this.apiService.getPeople().subscribe((data: Person[]) => {
      this.people = data;
    });
  }

  addPerson(): void {
    this.apiService.addPerson(this.person).subscribe(() => {
      this.refreshPeople();
      this.person = new Person();
    });
  }

  deletePerson(): void {
    this.apiService.deletePerson(this.person).subscribe(() => {
      this.refreshPeople();
      this.person = new Person();
    });
  }

  updatePerson(): void {
    this.apiService.updatePerson(this.person).subscribe(() => {
      this.refreshPeople();
      this.person = new Person();
    });
  }
}
