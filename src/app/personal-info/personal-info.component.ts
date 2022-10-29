import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  users$ : Observable<User> | undefined;

  constructor(private githubservice : GithubService) { }

  ngOnInit(): void {
    this.users$ = this.githubservice.getUser();
  }

}
