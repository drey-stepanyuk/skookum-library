(() => {
    const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
    
    // Main library object that gets rendered to the page
    let mainLibrary = xmlRequest.renderJson(url);

    // Event listeners 
    document.getElementById('ascending').addEventListener('click', organize.alphabeticallyAscending); 
    document.getElementById('descending').addEventListener('click', organize.alphabeticallyDescending);
    document.getElementById('nineties').addEventListener('click', organize.nineties);
    document.getElementById('eighties').addEventListener('click', organize.eightes);
    document.getElementById('seventies').addEventListener('click', organize.seventies);
    document.getElementById('sixties-prior').addEventListener('click', organize.sixtiesPrior);
    document.getElementById('na').addEventListener('click', organize.NA);
    document.getElementById('full-library').addEventListener('click', organize.showfullLibrary);
})();