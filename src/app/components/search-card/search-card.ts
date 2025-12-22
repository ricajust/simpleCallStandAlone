import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-card',
  imports: [
		MatCardModule, 
		FormsModule,
		MatFormFieldModule, 
		MatInputModule, 
		MatButtonModule,
		MatButtonToggleModule, 
		MatIconModule ],
  templateUrl: './search-card.html',
  styleUrl: './search-card.scss',
})
export class SearchCard {

	value?: string = "";

}
