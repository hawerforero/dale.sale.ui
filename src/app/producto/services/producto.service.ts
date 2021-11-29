import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlService = {
    get: API_URL + 'producto'
  };

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<any[]>(this.urlService.get);
  }

  public create(producto: Producto) {
    return this.http.post<any>(this.urlService.get, producto);
  }

}
