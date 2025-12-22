import { Component } from '@angular/core';
import { SearchCard } from '../../components/search-card/search-card';


@Component({
	selector: 'app-landing',
	imports: [ SearchCard ],
	templateUrl: './landing.html',
	styleUrl: './landing.scss',
})
export class Landing {

	value?: string = "";

}
