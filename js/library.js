const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
var xhr = new XMLHttpRequest();
var mainLibrary = {};

xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        mainLibrary = JSON.parse(this.responseText);
        renderData(mainLibrary.slice(0, 10));
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
                    <h4>${obj.title}</h4>
                    <p><span class="desc">By:</span> ${obj.author}</p>
                    <p><span class="desc">ISBN:</span> ${obj.isbn}</p>
                    <p id="card-year"><span class="desc">Year:</span> ${obj.year}</p>
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

let sortAscending = (first, second) => {
  return (first < second) ? -1 : (first > second) ? 1 : 0;
}

let sortDescending = (first, second) => {
  return (first < second) ? 1 : (first > second) ? -1 : 0;
}

let authorAscending = () => {
    let sortedLibrary = cloneObj(mainLibrary).sort((a, b) => {
        let first = a.author.toUpperCase();
        let second = b.author.toUpperCase();
        return sortAscending(first, second);
    });

    renderData(sortedLibrary);
}

let authorDescending = () => {
    let sortedLibrary = cloneObj(mainLibrary).sort((a, b) => {
        let first = a.author.toUpperCase();
        let second = b.author.toUpperCase();
        return sortDescending(first, second);
    });

    renderData(sortedLibrary);
}

let sortNineties = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1990 && book.year < 2000));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return sortAscending(first, second);
    });
    
    renderData(sortedLibrary);
}

let sortEightes = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1980 && book.year < 1990));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return sortAscending(first, second);
    });
    
    renderData(sortedLibrary);
}

let sortSeventies = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year >= 1970 && book.year < 1980));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return sortAscending(first, second);
    });
    
    renderData(sortedLibrary);
}

let sortSixtiesPrior = () => {
    let sortedLibrary = mainLibrary.filter(book =>
        (book.year < 1970 && book.year != false && book.year != null));
    
    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return sortAscending(first, second);
    });
    
    renderData(sortedLibrary);
}

let sortNA = () => {
  let sortedLibrary = mainLibrary.filter(book => (book.year == false || book.year == null));
  renderData(sortedLibrary);
}

let showfullLibrary = () => {
    renderData(mainLibrary);
}

document.getElementById('ascending').addEventListener('click',authorAscending);

document.getElementById('descending').addEventListener('click', authorDescending);

document.getElementById('nineties').addEventListener('click', sortNineties);

document.getElementById('eighties').addEventListener('click', sortEightes);

document.getElementById('seventies').addEventListener('click', sortSeventies);

document.getElementById('sixties-prior').addEventListener('click', sortSixtiesPrior);

document.getElementById('na').addEventListener('click', sortNA);

document.getElementById('full-library').addEventListener('click', showfullLibrary);