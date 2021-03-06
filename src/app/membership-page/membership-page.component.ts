import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-membership-page',
  templateUrl: './membership-page.component.html',
  styleUrls: ['./membership-page.component.css'],
  providers: [MemberService]
})
export class MembershipPageComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByTitle: string = 'allTitles';

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers();

    }

  goToDetailPage(clickedMember) {
       this.router.navigate(['members', clickedMember.$key]);
     }

     onChangeTitle(desiredTitle) {
    this.filterByTitle = desiredTitle;
  }


     }
