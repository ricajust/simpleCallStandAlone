import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SearchResponse } from '../interfaces/search-response';

@Injectable({
	providedIn: 'root',
})
export class Landing {

	private apiUrl: string = "https://openlibrary.org/search.json";

	constructor(private httpClient: HttpClient) {

	}

	//get
	public searching(term: string): Observable<SearchResponse> {
		return this.httpClient
			.get<any>(`${this.apiUrl}?q=${term}`)
			.pipe(
				map(raw => {
					return {
						q: raw.q,
						docs: raw.docs.map((doc: any) => ({
							author_name: doc.author_name,
							cover_edition_key: doc.cover_edition_key,
							ebook_access: doc.ebook_access,
							first_publish_year: doc.first_publish_year,
							language: doc.language,
							title: doc.title
						}))
					} as SearchResponse;
				})
			);
	}

	//post

	//put

	//delete

}
