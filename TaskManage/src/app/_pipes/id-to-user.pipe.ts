import { UsersService } from './../_services/users.service';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'idToUser'
})
export class IdToUserPipe implements PipeTransform {
  constructor(private usersService: UsersService) { }

  transform(value: number[], args?: any): any {
    return this.usersService.users$.pipe(map(users => users.filter(u => value.includes(u.id))));
  }
}
