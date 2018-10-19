import { Injectable } from '@angular/core';
import { Category, Article } from './support.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../environments/environment';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class SupportService implements Resolve<any> {
  apiUrl: string;

  constructor(private location: Location, private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (route.routeConfig.path == "question/:keyword") {

      return this.searchArticles(route.params.keyword);
      
    } else {
      if (route.params.articleId !== undefined) {

        return this.getArticle(route.params.articleId);

      } else if (route.params.categoryId !== undefined) {

        return this.getCategoryAndArticles(route.params.categoryId);

      } else {

        return this.getCategories();

      }

    }
  }

  getCategories() {
    this.apiUrl = this.toApiUrl('categories');
    return this.http.get(this.apiUrl, httpOptions);
  }

  getCategory(categoryId) {
    this.apiUrl = this.toApiUrl('category/get/' + categoryId);
    return this.http.get(this.apiUrl, httpOptions);
  }

  getCategoryAndArticles(categoryId) {
    this.apiUrl = this.toApiUrl('category-articles/get/' + categoryId);
    return this.http.get(this.apiUrl, httpOptions);
  }

  getArticles(categoryId) {
    this.apiUrl = this.toApiUrl('articles/' + categoryId);
    return this.http.get(this.apiUrl, httpOptions);
  }

  getArticle(articleId) {
    this.apiUrl = this.toApiUrl('article/get/' + articleId);
    return this.http.get(this.apiUrl, httpOptions);
  }

  searchArticles(question) {
    this.apiUrl = this.toApiUrl('articles/search/' + question);
    return this.http.get(this.apiUrl, httpOptions);
  }

  toApiUrl(href): string {
    return environment.apiBaseUrl + '/' + href;
  }

  toLink(title): string {
    let link = title.toLowerCase();
    link = link.replace(/ /g, '-');
    return link;
  }

  toTitle(link): string {
    var splitStr = link.toLowerCase().split('-');

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    let title = splitStr.join(' ');

    return title;
  }
}
