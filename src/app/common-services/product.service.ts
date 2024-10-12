import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const mainUrl = environment.serverUrl;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient ) { }

  fetchAllProducts(){
    return this.httpClient.get(`${mainUrl}/products`);
  }
}
