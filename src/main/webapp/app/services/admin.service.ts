import {HttpWrapperService} from '../shared/auth/http-wrapper.service';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class AdminService {

  private endpoint = '/api/';

  constructor(private _http: HttpWrapperService) {}

  getAll(type: string): Observable<any[]> {
    return this._http.get(this.endpoint + type)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  create(type: string, object: any): Observable<any> {
    return this._http.post(this.endpoint + type, this.nullifyBlanks(object))
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  update(type: string, object: any): Observable<any> {
    return this._http.put(this.endpoint + type, this.nullifyBlanks(object))
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  delete(type: string, id: Number) {
    return this._http.delete(this.endpoint + type + '/' +  id)
      .map(resp => resp)
      .catch(this.handleError);
  }

  get(type: string, id: Number): Observable<any> {
    return this._http.get(this.endpoint + type + '/' + id)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error.json());
    return Observable.throw(error.json() || 'Server Error');
  }

  // Converts empty strings to nulls to pass validation
  private nullifyBlanks(object: any) {
    return _.mapValues(object, field => {
      if (field === '') {
        field = null;
      }
      return field;
    });
  }
}
