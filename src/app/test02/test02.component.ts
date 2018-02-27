import { Component, Inject, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss']
})
export class Test02Component implements OnInit, AfterViewInit {

  private transfer = {
    user: {
      name: 'John Smith',
      photo_url: 'http://i.imgur.com/Y7u78c4.jpg'
    },
    transfer: {
      from: {
        account_name: 'Checking',
        account_number: 123456789123,
        account_balance: 5000
      },
      to: {
        name: 'Jane Smith',
        photo_url: 'http://i.imgur.com/CGILUTj.jpg'
      },
      amount: 300
    }
  };

  private alerts = [];

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.element.nativeElement.querySelector('.skip-link').focus();
    }, 0);
  }

  ngAfterViewInit(): void {

  }

  addAlert() {
    this.alerts.push({type: 'success', msg: 'Well done! You successfully read this important alert message.'});
    //programmatically setting focus to the alert on submit of the form.
    setTimeout(() => {
      this.element.nativeElement.querySelector('.alert-success').focus();
    }, 0);

  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
