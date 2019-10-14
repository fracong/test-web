import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {
  testActivatedRoute = 'test';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  jumpMenufunction(flag) {
    if (flag === 'left') {
      this.router.navigate(['/menu-left']);
    } else if (flag === 'right') {
      this.router.navigate(['/menu-right'], {queryParams: { testActivatedRoute: this.testActivatedRoute } });
    }
  }
}
