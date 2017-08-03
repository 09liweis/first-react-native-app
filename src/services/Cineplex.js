var cineplex = {
	getNearByTheatres() {
		return fetch('https://www.cineplex.com/QuickTicket/GetNearByTheatres').then(
			(res) => res.json()
		);
	},
	getMovies() {
		return fetch('https://www.cineplex.com/api/movies/getall?&Language=EN&Skip=0&Take=500').then(
			(res) => res.json()
		);
	},
	getMovieTheatres(movieId) {
		return fetch('https://www.cineplex.com/api/theatres/getmovietheatres?FilmId=' + movieId).then(
			(res) => res.json()
		);
	}
};

module.exports = cineplex;