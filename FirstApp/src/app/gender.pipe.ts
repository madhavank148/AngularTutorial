import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(input: unknown, genderType?: string): unknown {
    //logic as per business requirement
    //gendertype & data => I have format the data by appending Mr. or Ms.
    if (genderType == 'M' || genderType == 'm') {
      return 'Mr. ' + input;
    } else if (genderType == 'F' || genderType == 'f') {
      return 'Ms. ' + input;
    } else {
      return input;
    }
  }
}
