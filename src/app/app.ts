import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './views/landing/landing';
import { Header } from './components/header/header';

@Component({
	selector: 'app-root',
	imports: [Header, RouterOutlet, Landing],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	protected readonly title = signal('simpleCallStandAlone');
}
