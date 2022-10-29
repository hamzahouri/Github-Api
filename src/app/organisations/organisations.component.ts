import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Organisation } from '../organisation';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {

  orgs$ : Observable<Organisation[]> | undefined;

  constructor(private githubService : GithubService) { }

  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrganisations();
  }

}
