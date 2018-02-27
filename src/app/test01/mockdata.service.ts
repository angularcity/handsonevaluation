import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockdataService {
  langChange = new Subject<any>();
  currentLang: string = 'en';

  constructor(private httpClient: HttpClient) { }

  setLang(lang){
    this.currentLang = lang;
  }
  getLang(){
    return this.currentLang;
  }

  getButtonData(){
    return this.httpClient.get('assets/data.json')
  }

  getButtonDataInFrench(){
    return this.httpClient.get('assets/data.french.json')
  }
}

