const sort = (() => {

    let sortAscending = (first, second) => {
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    };
    
    let sortDescending = (first, second) => {
        return (first < second) ? 1 : (first > second) ? -1 : 0;
    };
    
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
    
    let sortNineties = () => {
        let sortedLibrary = mainLibrary.filter(book =>
            (book.year >= 1990 && book.year < 2000));
    
        sortedLibrary.sort((a, b) => {
            let first = a.year;
            let second = b.year;
            return sortAscending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    let sortEightes = () => {
        let sortedLibrary = mainLibrary.filter(book =>
            (book.year >= 1980 && book.year < 1990));
    
        sortedLibrary.sort((a, b) => {
            let first = a.year;
            let second = b.year;
            return sortAscending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    let sortSeventies = () => {
        let sortedLibrary = mainLibrary.filter(book =>
            (book.year >= 1970 && book.year < 1980));
    
        sortedLibrary.sort((a, b) => {
            let first = a.year;
            let second = b.year;
            return sortAscending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    let sortSixtiesPrior = () => {
        let sortedLibrary = mainLibrary.filter(book =>
            (book.year < 1970));
    
        sortedLibrary.sort((a, b) => {
            let first = a.year;
            let second = b.year;
            return sortAscending(first, second);
        });
    
        dataService.renderData(sortedLibrary);
    };
    
    let sortNA = () => {
        let sortedLibrary = mainLibrary.filter(book => (book.year == 'N/A'));
        dataService.renderData(sortedLibrary);
    };
    
    let showfullLibrary = () => {
        dataService.renderData(mainLibrary);
    };

    return {
        alphabeticallyAscending: alphabeticallyAscending,
        alphabeticallyDescending: alphabeticallyDescending,
        nineties: sortNineties,
        eightes: sortEightes,
        seventies: sortSeventies,
        sixtiesPrior: sortSixtiesPrior,
        NA: sortNA,
        showfullLibrary: showfullLibrary
    };
})();