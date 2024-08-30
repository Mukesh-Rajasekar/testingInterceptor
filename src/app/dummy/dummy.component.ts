import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { stringify } from 'querystring';
import { Restaurant } from '../../model/user';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  favRest:any[]= [];
    constructor(private user:UserService, private logins:LoginService){}

    ngOnInit(): void {
      console.log('working');
      let id = this.logins.getUserId();
      this.user.getFavRestaurants(id).subscribe({
        next:(data) => {
          this.favRest = data;
          console.log(this.favRest);
        },
        error:()=>{console.log("error occured");}
      })
    }
}
