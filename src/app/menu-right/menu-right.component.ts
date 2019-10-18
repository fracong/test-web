import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {ModeTwoComponent} from '../modal/mode-two/mode-two.component';
import {AppService} from '../app.service';
import {HttpClientService} from '../http-client.service';
declare let $: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss']
})
export class MenuRightComponent implements OnInit {

  windowHeightRight: number = $(window).height();
  // @ts-ignore
  @ViewChild('modeTwo')
  modeTwo: ModeTwoComponent

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
}
