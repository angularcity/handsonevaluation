import { MockdataService } from './../../test01/mockdata.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onLanguage = new EventEmitter<string>();
  isVisible = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: MockdataService) { }

  ngOnInit() {
  }

  langChange(lang){
    this.onLanguage.emit(lang);
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }

}
