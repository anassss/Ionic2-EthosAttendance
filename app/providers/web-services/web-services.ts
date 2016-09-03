import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebServices {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(url) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // let opt: RequestOptions
    // let myHeaders: Headers = new Headers
    // myHeaders.set('Content-type', 'application/json')
    // opt = new RequestOptions({
    //   headers: myHeaders
    // });

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)//, opt
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
          console.log(data);
        },err=>{ alert('Internet not avaliable!'); console.log("error"); });
    });
  }
}

