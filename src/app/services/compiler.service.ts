import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  url = 'http://localhost:8080/postWord';

  constructor(private _http: HttpClient) { }

  async getResponse( snippet ) {

    const name = { snippet : snippet }
    console.log( name )
    return await this._http.post(`${this.url}`, name);
  }
}