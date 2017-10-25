(() => {
    const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
    
    // Main library object that gets rendered to the page
    let mainLibrary = xmlRequest.renderJson(url);

    // Receives element ID and then calls the appropriate sorting/filter function 
    let clickButton = (but) => {
        switch (but) {
            case 'ascending':
                organize.alphabeticallyAscending();
                break;
            case 'descending':
                organize.alphabeticallyDescending();
                break;
            case 'nineties':
                organize.nineties();
                break;
            case 'eighties':
                organize.eightes();
                break;
            case 'seventies':
                organize.seventies();
                break;
            case 'sixties-prior':
                organize.sixtiesPrior();
                break;
            case 'na':
                organize.NA();
                break;
            case 'full-library':
                organize.showfullLibrary();
                break;
            default:
                return;
        };
    };

    // Single event listener that takes in the target event's ID and calls on clickButton
    document.querySelector('header').addEventListener('click', (event) => {
        clickButton(event.target.id);
    });



})();