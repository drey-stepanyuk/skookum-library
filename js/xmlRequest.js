// Xml HTTP Request to pull data from the library API 
const xmlRequest = (() => {
	
	const makeRequest = (url) => {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.onload = function () {
				if (this.readyState === 4 && this.status === 200) {
					resolve(dataService.renderJson(this.responseText));
				} else {
					reject({
						status: this.status,
						statusText: xhr.statisText
					});
				}
			};
			xhr.onerror = function () {
				reject({
					status: this.status,
					statusText: xhr.statisText
				});
			};
			xhr.open('GET', url, true);
			xhr.send(null);
		});
	};

    return {
        makeRequest: makeRequest
    };
})();