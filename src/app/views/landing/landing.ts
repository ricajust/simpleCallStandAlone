import { Component, Signal, signal } from '@angular/core';
import { SearchCard } from '../../components/search-card/search-card';
import { Table } from '../../components/table/table';
import { SearchResponse } from '../../interfaces/search-response';
import { Book } from '../../interfaces/book';
import { Card } from '../../components/card/card';


@Component({
	selector: 'app-landing',
	imports: [SearchCard, Table, Card],
	templateUrl: './landing.html',
	styleUrl: './landing.scss',
})
export class Landing {

	value?: string = "";
	dataSource = signal<Book[]>([]);
	
	public handleSearchResults(data: SearchResponse) {
		if (!data) {
			this.dataSource.set([]);
		}
		this.dataSource.set(data?.docs);
		console.table(this.dataSource);
	}
}
