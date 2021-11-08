import { Injectable } from '@angular/core';
import { Seeder } from '../data/Initializer';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks = new BehaviorSubject(Seeder.tasks);
  categories = new BehaviorSubject(Seeder.categories);

  constructor() { }

  getCategories(): Category[] {
    return Seeder.categories;
  }

  getTasks() {
    this.tasks.next(Seeder.tasks);
  }

  sortTaskByCarogory(category: Category): void {
    const sortedTasks = Seeder.tasks.filter(task => task.category === category);
    console.log("sortedTasks ", sortedTasks);
    this.tasks.next(sortedTasks);
  }
}
