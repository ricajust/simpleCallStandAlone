import { Book } from "./book";

export interface SearchResponse {
	q: string;
	docs: Book[];
}
