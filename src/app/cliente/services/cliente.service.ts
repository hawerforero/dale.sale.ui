import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente'

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlService = {
    get: API_URL + 'cliente'
  };

  constructor(private http: HttpClient) { }

  public getById(id: string) {
    return this.http.get<any[]>(this.urlService.get + "/"+id);
  }

  public delete(id: string) {
    return this.http.delete<any>(this.urlService.get + "/"+id);
  }

  public getAll() {
    return this.http.get<any[]>(this.urlService.get);
  }

  public create(producto: Cliente) {
    return this.http.post<any>(this.urlService.get, producto);
  }

  public update(producto: Cliente) {
    return this.http.put<any>(this.urlService.get, producto);
  }

}
