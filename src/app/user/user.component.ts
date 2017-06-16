import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import {MemberService} from '../member.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MemberService]
})
export class UserComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(title: string, name: string, age: number, description: string){
      var newMember: Member = new Member(title, name, age, description);
      this.memberService.addMember(newMember);

}
}
