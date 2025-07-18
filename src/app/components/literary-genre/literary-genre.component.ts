import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LiteraryGenre } from '../book/book';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-literary-genre',
  imports: [
    BookComponent,
    CommonModule
  ],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css'
})
export class LiteraryGenreComponent {

  genre = input.required<LiteraryGenre>();
}
