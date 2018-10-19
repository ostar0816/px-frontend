export class Category {

  id: string;
  mark: string;
  title: string;
  link: string;
  description: string;

  constructor(category) {
    this.id = category.id;
    this.mark = category.mark;
    this.title = category.title;
    this.link = category.link;
    this.description = category.description;

  }
}



export class Article {

  id: string;
  title: string;
  description: string;
  link: string;
  contents: Object[];
  categoryId; string;
  updatedAt: Date;

  constructor(article) {
    this.id = article.id;
    this.title = article.title;
    this.description = article.description;
    this.link = article.description;
    this.contents = article.contents;
    this.categoryId = article.categoryId;
    this.updatedAt = article.updatedAt;
  }
}