const xmlRequest = (() => {
    let xhr = new XMLHttpRequest();

    const getJson = (url) => {
        xhr.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                mainLibrary = JSON.parse(this.responseText);
                dataService.cleanFalsyObj(mainLibrary);
                dataService.renderData(mainLibrary.slice(0, 10));
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    };

    return {
        getJson: getJson
    };
})();