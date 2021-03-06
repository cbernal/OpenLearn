import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {HttpWrapperService} from './http-wrapper.service';

@Injectable()
export class AccountService {

  private endpoint = '/api/account';

  constructor(private http: HttpWrapperService) {}

  get(): Observable<any> {
    return this.http.get(this.endpoint)
      .map((resp: Response) => resp.json());
  }
}
