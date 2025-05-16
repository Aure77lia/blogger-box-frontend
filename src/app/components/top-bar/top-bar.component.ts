import {Component,Input} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../data/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: false,
})
export class TopBarComponent {
  @Input()
  user!: User;
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['home']);
  }
  goToUserList() {
    this.router.navigate(['users']);
  }
  goToUserDetails() : void{
    this.router.navigate(['users',this.user.id]);
  }
  goToConnection() : void{
    this.router.navigate(['connection']);
  }
}

