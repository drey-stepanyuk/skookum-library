(() => {
    const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
    
    let mainLibrary = xmlRequest.getJson(url);
    
    document.getElementById('ascending').addEventListener('click', sort.alphabeticallyAscending);
    
    document.getElementById('descending').addEventListener('click', sort.alphabeticallyDescending);
    
    document.getElementById('nineties').addEventListener('click', sort.nineties);
    
    document.getElementById('eighties').addEventListener('click', sort.eightes);
    
    document.getElementById('seventies').addEventListener('click', sort.seventies);
    
    document.getElementById('sixties-prior').addEventListener('click', sort.sixtiesPrior);
    
    document.getElementById('na').addEventListener('click', sort.NA);
    
    document.getElementById('full-library').addEventListener('click', sort.showfullLibrary);
})();