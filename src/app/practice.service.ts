import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class PracticeService {

  constructor(private http:HttpClient) { }

getData(){
  return this.http.get('../../assets/shipping.json');
}
}