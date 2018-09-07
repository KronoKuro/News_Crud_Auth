import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  login(data: any) {
    return this.http.post('api/token', data);
  }

  checkAcess() {
    return this.http.get<boolean>('api/checktoken');
  }

  constructor(private http: HttpClient) { }

}
