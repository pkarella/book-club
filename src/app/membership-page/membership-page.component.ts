import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-membership-page',
  templateUrl: './membership-page.component.html',
  styleUrls: ['./membership-page.component.css'],
  providers: [MemberService]
})
export class MembershipPageComponent implements OnInit {
  members: Member[] = [
     new Member("member", "George Washington", 22,
         "A great guy who is rumored to have never told a lie", 1),
     new Member("member", "Richard Nixon", 45,
         "He will always pick, but never tust a book choice from Mr. slick Dick", 2),
     new Member("member", "Jimmy Carter", 50,
         "Whatever you do don't talk about his peanuts or else he becomes a mean nut", 3)
    ];

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){

    }

  goToDetailPage(clickedMember: Member) {
       this.router.navigate(['members', clickedMember.id]);
     };




}
