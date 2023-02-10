import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AvionModule, CreateAvionModule, UpdateAvionModule } from '../entities/avion/avion.module';

@Injectable({
  providedIn: 'root'
})
export class AvionesHttpService {
  readonly API_URL = "https://api.escuelajs.co/api/v1/categories";

  constructor(private httpClient: HttpClient) {}

  getAllAvion():Observable<AvionModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<AvionModule>(url);
  }

  getOneAvion(id:AvionModule['id']):Observable<AvionModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<AvionModule>(url)
  }

  storeAvion(avion:CreateAvionModule):Observable<AvionModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<AvionModule>(url, avion)
  }

  updateAvion(id:AvionModule['id'], avion:UpdateAvionModule):Observable<AvionModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.put<AvionModule>(url, avion)
  }


  destroyAvion(id:AvionModule['id']):Observable<any>{
    const url = `${this.API_URL}`;
    return this.httpClient.delete<any>(url).pipe(map((response: {rta:boolean}) =>{
      return response.rta
    })
    );
  }
}