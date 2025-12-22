import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../../components/header/header';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-landing',
	imports: [
		Header, 
		MatCardModule, 
		FormsModule,
		MatFormFieldModule, 
		MatInputModule, 
		MatButtonModule ,
		MatButtonToggleModule, 
		MatIconModule ],
	templateUrl: './landing.html',
	styleUrl: './landing.scss',
})
export class Landing {

	value?: string = "";

}
