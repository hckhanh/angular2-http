import {Component} from 'angular2/core';
import {Movie} from './movie';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'http-app',
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: 'template/submit_form.html'
})

export class HttpApp {
	//movies: Movie[];
	colors: string[] = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

	constructor(public http: Http) {}

	requestMovies() {
		this.http.get('https://code2learn.me/imdb_top_250?offset=0')
			.map(res =>res.json())
			.subscribe(movies => {
				$('#table-movie').DataTable({
					data: movies.map(movie => [movie.rank, movie.name]),
					columns: [
						{ title: "Rank" },
						{ title: "Movie Name" }
					],
					responsive: true,
					select: true,
					fixedHeader: true
				});
			});
	}

	get getRandomColor(): string {
		var index = Math.floor((Math.random() * 10)) % this.colors.length;
		return this.colors[index];
	}

	private convertMoviesData(movies: Movie[]) {
		var moviesData = [];
		//movies.map(movie => [])
	}
}