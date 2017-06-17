import {Pipe, PipeTransform} from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: "title",
  pure: false
})


export class TitlePipe implements PipeTransform {

  transform(input: Member[], desiredTitle) {
    var output: Member[] = [];
      if (desiredTitle === "members"){
    for (var i = 0; i < input.length; i++) {
     if(input[i].title === 'Member'){
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredTitle === "officials") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].title === 'Official') {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;

    }
  }
}
