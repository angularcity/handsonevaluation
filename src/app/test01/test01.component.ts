import { Component, OnInit } from '@angular/core';
//service
import { MockdataService } from './mockdata.service';
import { DataModel } from './data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

  buttonData: DataModel;
  selectedLang: string;

  constructor(private dataService: MockdataService, private route: ActivatedRoute) { }

  ngOnInit() {

    //get the current language selection
    this.selectedLang = this.dataService.getLang();

    //call appropriate language service method

    if(this.selectedLang === 'en'){
      this.dataService.getButtonData().subscribe(
        data => {
          this.buttonData = data;
        }
      )
    }

    if(this.selectedLang === 'fr'){
      this.dataService.getButtonDataInFrench().subscribe(
        data => {
          this.buttonData = data;
        }
      )
    }

    //Dropdown change triggers the service call for respective method again.

    this.dataService.langChange.subscribe(
      lang => {

        if(lang === 'fr'){
          this.dataService.getButtonDataInFrench().subscribe(
            data => {
              this.buttonData = data;
            }
          )
        }
        else {
          this.dataService.getButtonData().subscribe(
            data => {
              this.buttonData = data;
            }
          )
        }
      }
    )
  }

}
