import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlProductos = {
    get: API_URL + 'producto'
  };

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<any[]>(this.urlProductos.get);
  }

}
