import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AboutService {
  apiUrl: string;

  constructor(private location: Location, private http: HttpClient) {
  }

  getTeamMembers() {
    this.apiUrl = this.toApiUrl('members');
    return this.http.get(this.apiUrl, httpOptions);
  }

  toApiUrl(href): string {
    return environment.apiBaseUrl + '/' + href;
  }
}
