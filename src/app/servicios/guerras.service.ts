import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuerrasService {
  private apiUrl = 'http://localhost:3000'; // La URL de tu backend

  constructor(private http: HttpClient) { }

  getGuerras() {
    return this.http.get(`${this.apiUrl}/guerras`);
  }

  // Agregar métodos para crear, actualizar y eliminar guerras según tus necesidades.
}
