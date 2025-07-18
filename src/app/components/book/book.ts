export interface Book {
    title: string,
    author: string,
    fav: boolean,
    genre: LiteraryGenre,
    img: string,
}

export interface LiteraryGenre {
    id: string, 
    value: string, 
    books: Book[], 

}