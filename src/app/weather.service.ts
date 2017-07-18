import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

	constructor(private _http: Http) { }

	getWeather(url){
		return this._http.get(url).map(data => data.json()).toPromise()
	}

}

//Open weather api key: &APPID=e8794b59d0fe753ff80c512a2b08763f
