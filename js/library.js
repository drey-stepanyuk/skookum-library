const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
var xhr = new XMLHttpRequest();
var mainLibrary = {};

xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        mainLibrary = JSON.parse(this.responseText);
        renderData(mainLibrary);
    }
};
xhr.open('GET', url, true);
xhr.send(null);

let renderData = (data) => {
    var container = '';

    Array.from(data).forEach(obj => {
        var bookCard =
            `
                <div class="book-card">
                    <p>${obj.title}</p>
                    <p>${obj.author}</p>
                    <p>ISBN: ${obj.isbn}</p>
                    <p>Year: ${obj.year}</p>
                </div>

            `
        container += bookCard;
    });

    document.getElementById('inner-container').innerHTML = container;
}

// Event listeners

let cloneObj = (obj) => {
    let clone = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) clone[attr] = obj[attr];
    }
    return clone;
}

let sortAscending = () => {
    let sortedLibrary = cloneObj(mainLibrary).sort((a, b) => {
        let first = a.author.toUpperCase();
        let second = b.author.toUpperCase();
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });

    renderData(sortedLibrary);
}

let sortDescending = () => {
    let sortedLibrary = cloneObj(mainLibrary).sort((a, b) => {
        let first = a.author.toUpperCase();
        let second = b.author.toUpperCase();
        return (first < second) ? 1 : (first > second) ? -1 : 0;
    });

    renderData(sortedLibrary);
}

let sortNineties = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1990 && book.year < 2000));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
    
    renderData(sortedLibrary);
}

let sortEightes = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1980 && book.year < 1990));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
    
    renderData(sortedLibrary);
}

let sortSeventies = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1970 && book.year < 1980));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
    
    renderData(sortedLibrary);
}

let sortSixtiesPrior = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year < 1970 && book.year != false && book.year != null));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
    
    renderData(sortedLibrary);
}

let showfullLibrary = () => {
    console.table(mainLibrary);
    renderData(mainLibrary);
}

document.getElementById('ascending').addEventListener('click', sortAscending);

document.getElementById('descending').addEventListener('click', sortDescending);

document.getElementById('nineties').addEventListener('click', sortNineties);

document.getElementById('eighties').addEventListener('click', sortEightes);

document.getElementById('seventies').addEventListener('click', sortSeventies);

document.getElementById('sixties-prior').addEventListener('click', sortSixtiesPrior);

document.getElementById('full-library').addEventListener('click', showfullLibrary);