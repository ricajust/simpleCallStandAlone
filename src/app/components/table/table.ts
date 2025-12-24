import { Component, input, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-table',
  imports: [ MatTableModule ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {

	// @Input() dataSource: Book[] = [];
	dataSource = input<Book[]>([]);

	constructor() {}

	displayedColumns: string[] = ['title', 'author_name', 'first_publish_year', 'language'];
}
