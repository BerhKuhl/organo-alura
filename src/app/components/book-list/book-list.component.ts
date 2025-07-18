import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-books';
import { Book, LiteraryGenre } from '../book/book';
import { LiteraryGenreComponent } from "../literary-genre/literary-genre.component";

@Component({
  selector: 'app-book-list',
  imports: [LiteraryGenreComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  genres: LiteraryGenre[] = [];
  booksByGenre: Map<string, Book[]> = new Map();

  ngOnInit(): void {
      this.booksByGenre = new Map();

      books.forEach((book) => {
        const genreId = book.genre.id;

        if (!this.booksByGenre.has(genreId)) {
          this.booksByGenre.set(genreId, []);
        }
        this.booksByGenre.get(genreId)?.push(book);
      });

      this.genres = [{
        id: 'romance',
        value: 'Romance',
        books: this.booksByGenre.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        books: this.booksByGenre.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksByGenre.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksByGenre.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksByGenre.get('tecnicos') ?? [],
      },
      {
        id: 'suspense',
        value: 'Suspense',
        books: this.booksByGenre.get('suspense') ?? [],
      },
    ];

    console.log(this.booksByGenre)
  }
}
