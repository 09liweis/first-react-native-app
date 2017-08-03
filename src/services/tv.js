var tv = {
	getPopular() {
		var url = 'https://api.themoviedb.org/3/tv/popular?api_key=8109b23cc9abaf02cf3c699ec62ccc19&language=en-US&page=1';
		return fetch(url).then((res) => res.json());
	}
};

module.exports = tv;