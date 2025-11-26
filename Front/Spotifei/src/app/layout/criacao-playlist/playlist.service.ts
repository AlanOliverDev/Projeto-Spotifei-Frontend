import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) {}

  getPlaylists(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/usuarios/${usuarioId}/playlists`);
  }
}
