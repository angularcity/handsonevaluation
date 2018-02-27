import { MockdataService } from './test01/mockdata.service';
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public translate: TranslateService, private dataSvc: MockdataService) {

    //The ng2-translate defaults to the language "English" here.
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.dataSvc.setLang(browserLang);
 }
 handleOnLang(lang){
    this.translate.use(lang);
    this.dataSvc.setLang(lang);
    this.dataSvc.langChange.next(lang);
 }

}
