var bilibili = {
	getHomePage() {
		return fetch('http://www.bilibili.com/index/ding.json').then((res) => res.json());
	}
}

module.exports = bilibili;