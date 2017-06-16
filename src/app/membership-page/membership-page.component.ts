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
  members: Member[];

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers(); 
    }

  goToDetailPage(clickedMember: Member) {
       this.router.navigate(['members', clickedMember.id]);
     };




}
