// Different sorting and filtering functions
const organize = (() => {
    // Ascending and Descending
    let sortAscending = (first, second) => {
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    };
    
    let sortDescending = (first, second) => {
        return (first < second) ? 1 : (first > second) ? -1 : 0;
    };
    
    // Alphabetically 
    let alphabeticallyAscending = () => {
        let sortedLibrary = dataService.cloneObj(mainLibrary).sort((a, b) => {
            let first = a.author.toUpperCase();
            let second = b.author.toUpperCase();
            return sortAscending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    let alphabeticallyDescending = () => {
        let sortedLibrary = dataService.cloneObj(mainLibrary).sort((a, b) => {
            let first = a.author.toUpperCase();
            let second = b.author.toUpperCase();
            return sortDescending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    // Filters by Era
    let filterNineties = () => {
        let filteredLibrary = mainLibrary.filter(book =>
            (compareYears(book, 1990, 2000)));
    
        finishSort(filteredLibrary);
    };
    
    let filterEightes = () => {
        let filteredLibrary = mainLibrary.filter(book =>
            (compareYears(book, 1980, 1990)));
    
        finishSort(filteredLibrary);
    };
    
    let filterSeventies = () => {
        let filteredLibrary = mainLibrary.filter(book =>
            (compareYears(book, 1970, 1980)));
    
        finishSort(filteredLibrary);
    };
    
    let filterSixtiesPrior = () => {
        let filteredLibrary = mainLibrary.filter(book =>
            (book.year < 1970));
    
        finishSort(filteredLibrary);
    };
    
    // Sorts to show entries with NA values
    let filterNA = () => {
        let filteredLibrary = mainLibrary.filter(book => (book.year == 'N/A'));
        dataService.renderData(filteredLibrary);
    };
    
    // Shows the full library
    let showfullLibrary = () => {
        dataService.renderData(mainLibrary);
    };

    // Finishes the filter for the era functions by sorting it and rendering the data 
    let finishSort = (filteredLibrary) => {
        filteredLibrary.sort((a, b) => {
            let first = a.year;
            let second = b.year;
            return sortAscending(first, second);
        });
    
        dataService.renderData(filteredLibrary);
    };

    // Returns values between two specified years 
    let compareYears = (book, a, b) => {
        return (book.year >= a && book.year < b);
    };

    return {
        alphabeticallyAscending: alphabeticallyAscending,
        alphabeticallyDescending: alphabeticallyDescending,
        nineties: filterNineties,
        eightes: filterEightes,
        seventies: filterSeventies,
        sixtiesPrior: filterSixtiesPrior,
        NA: filterNA,
        showfullLibrary: showfullLibrary
    };
})();