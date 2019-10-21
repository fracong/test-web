import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import {ModeTwoComponent} from '../modal/mode-two/mode-two.component';
import {AppService} from '../app.service';
import {HttpClientService} from '../http-client.service';
declare let $: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
  animations: [
    trigger('btnChange', [
      state('one', style({
        backgroundColor: '#337ab7',
        transform: 'scale(1)'
      })),
      state('two', style({
        backgroundColor: '#cc2c21',
        transform: 'scale(1.7)'
      })),
      transition('one => two', animate('1000ms ease-in')),
      transition('two => one', animate('1000ms ease-out'))
    ]),
    trigger('btnChange2', [
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate(5000)]),
      transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))])
    ])
  ]
})
export class MenuRightComponent implements OnInit {
  stateType = 'one';

  windowHeightRight: number = $(window).height();
  // @ts-ignore
  @ViewChild('modeTwo')
  modeTwo: ModeTwoComponent;

  constructor(
    private router: Router,
    private service: AppService,
    private aRoute: ActivatedRoute,
    private httpClient: HttpClientService
  ) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe(params => {
      console.log(params.testActivatedRoute);
    });
  }

  initWindowsHeight() {
    this.windowHeightRight = $(window).height();
  }

  ShowP() {
    this.modeTwo.addMsg2P('hahaha');
  }

  clickQueryListByHttpClientGet() {
    this.httpClient.queryList().subscribe((data) => {
      console.log(typeof data.list);
      console.log(data.list);
    });
  }

  clickSaveHttpClientPost() {
    this.httpClient.saveFormPostHttp('502', '3', '1', '2', '4', '3', '32', '65').subscribe(dataJson => {
      console.log(typeof dataJson);
      console.log(dataJson.flag);
    });
  }

  clickHttpClientQueryJsonp() {
    this.httpClient.queryJsonpList().subscribe(data => {
      console.log(data.name);
    });
  }

  clickHttpQueryJsonp() {
    this.service.httpQueryJsonp().subscribe(data => {
      console.log(data.name);
    });
  }

  changeState() {
    this.stateType = this.stateType === 'one' ? 'two' : 'one';
  }
}
