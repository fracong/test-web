import { Component, OnInit } from '@angular/core';
import {Router ,NavigationExtras,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  jumpMenufunction(flag){
    if(flag == "left"){
      this.router.navigate(['/menu-left']);
    }else if(flag == "right"){
      this.router.navigate(['/menu-right']);
    }
  }
}
