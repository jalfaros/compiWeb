import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  url = 'http://localhost:8080/';

  constructor(private _http: HttpClient) { }

  postResponse(snippet) {
    return this._http.post(`${this.url}postWord`, snippet);
  }

  getAllResponse() {
    return this._http.get(`${this.url}getAllWords`);
  }
}