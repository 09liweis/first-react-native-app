const apikey = '?apikey=BKkjwmg1nwtdepfrI5R79YvzLODQwFnj';
var weather = {
	getSearchLocations(location) {
		var url = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete' + apikey + '&q=' + location;
		return fetch(url).then((res) => res.json());
	},
	getCurrentConditions(key) {
		var url = 'http://dataservice.accuweather.com/currentconditions/v1/' + key + apikey + '&details=true';
		return fetch(url).then((res) => res.json());
	},
	getIcon(iconNum) {
		var icon = (iconNum < 10) ? '0' + iconNum : iconNum;
		return 'https://developer.accuweather.com/sites/default/files/' + icon + '-s.png';
	},
	getCurrentTemp(lat, long) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=323b480b81057a727bed54d9532159d6&units=celsius';
		return fetch(url).then((res) => res.json());
	}
};

module.exports = weather;