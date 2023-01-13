export class CdRequest {

  name: string;

  author: string;

  genreId: number;

  constructor(name: string, author: string, genreId: number) {
    this.name = name;
    this.author = author;
    this.genreId = genreId;
  }
}
