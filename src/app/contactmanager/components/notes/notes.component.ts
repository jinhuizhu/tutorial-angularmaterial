import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../models/note";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter (filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
