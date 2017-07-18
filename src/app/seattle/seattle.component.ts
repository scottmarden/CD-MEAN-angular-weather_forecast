import { Component, OnInit } from '@angular/core';
import { WeatherService } from '.././weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

	constructor(private _weatherService: WeatherService) { }

	weather: any = null;

	url = "http://api.openweathermap.org/data/2.5/weather?q=seattle,wa&units=imperial&APPID=e8794b59d0fe753ff80c512a2b08763f"

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
