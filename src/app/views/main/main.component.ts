import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Task } from 'src/app/models/Tasks';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // @ts-ignore
  dataSource: MatTableDataSource<Task>;
  displayedColumns: string[] = ['id', 'title', 'status', 'category', "date"];
  tasks: Task[] = [];

  // @ts-ignore
  @ViewChild(MatSort, { static: false }) private sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator, { static: false }) private paginator: MatPaginator;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.tasks.subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  ngAfterViewInit() {
    this.addTableObjects();
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
    this.addTableObjects();

    //@ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'category': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
        case 'title': {
          return task.title;
        }
      }
    }
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
