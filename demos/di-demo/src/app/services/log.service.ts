import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  logHistory(serviceName){
    console.log(`${serviceName} is create`);
  }
}
