import { Component, OnInit } from '@angular/core';
import { WeatherService } from '.././weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

	constructor(private _weatherService: WeatherService) { }

	weather: any = null;

	url = "http://api.openweathermap.org/data/2.5/weather?q=burbank,ca&units=imperial&APPID=e8794b59d0fe753ff80c512a2b08763f"

	forecast(url){
		this._weatherService.getWeather(url)
		.then( (weather) => {
			console.log(weather)
			this.weather = weather;
		})
		.catch( (err) => {
			console.log(err)
		})
	}

	ngOnInit() {
		this.forecast(this.url);
	}

}
