// Xml HTTP Request to pull data from the library API 
const xmlRequest = (() => {
    let xhr = new XMLHttpRequest();

    // Sets mainLibrary equal to the parsed JSON, cleans the object, and renders the data
    const renderJson = (url) => {
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
        renderJson: renderJson
    };
})();