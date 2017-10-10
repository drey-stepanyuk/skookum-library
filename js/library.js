const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
var xhr = new XMLHttpRequest();
var mainLibrary = {};

xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        mainLibrary = JSON.parse(this.responseText);
        cleanFalsyObj(mainLibrary);
        renderData(mainLibrary.slice(0, 10));
    }
};
xhr.open('GET', url, true);
xhr.send(null);

let renderData = (data) => {
    let count = 0;
    var container =
        `
            <table class="library-table">
                <thead>
                    <tr class="table-row">
                        <th id="col-1"><h3>Title</h3></th>
                        <th id="col-2"><h3>Author</h3></th>
                        <th id="col-3"><h3>ISBN</h3></th>
                        <th id="col-4"><h3>Year</h3></th>
                    </tr>
                </thead>
                <tbody>
            `;

    Array.from(data).forEach(obj => {
        var bookCard =
            `
                <tr class="table-row">
                    <td>${obj.title}</td>
                    <td> ${obj.author}</td>
                    <td> ${obj.isbn}</td>
                    <td> ${obj.year}</td>
                </tr>
            `;
        container += bookCard;
        count++;
    });

    container +=
        `
            </tbody>
        </table>
        `

    document.getElementById('inner-container').innerHTML = container;
    document.getElementById('book-count').innerHTML = count;
}

let cleanFalsyObj = (arr) => {
    arr.forEach(obj => {
        obj.title = cleanFalsyProp(obj.title);
        obj.author = cleanFalsyProp(obj.author);
        obj.isbn = cleanFalsyProp(obj.isbn);
        obj.year = cleanFalsyProp(obj.year);
    });
}

let cleanFalsyProp = (prop) => {
    if (!prop) {
        return 'N/A';
    } else {
        return prop;
    }
}

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

let alphabeticallyAscending = () => {
    let sortedLibrary = cloneObj(mainLibrary).sort((a, b) => {
        let first = a.author.toUpperCase();
        let second = b.author.toUpperCase();
        return sortAscending(first, second);
    });

    renderData(sortedLibrary);
}

let alphabeticallyDescending = () => {
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
        (book.year < 1970));

    sortedLibrary.sort((a, b) => {
        let first = a.year;
        let second = b.year;
        return sortAscending(first, second);
    });

    renderData(sortedLibrary);
}

let sortNA = () => {
    let sortedLibrary = mainLibrary.filter(book => (book.year == 'N/A'));
    renderData(sortedLibrary);
}

let showfullLibrary = () => {
    renderData(mainLibrary);
}

document.getElementById('ascending').addEventListener('click', alphabeticallyAscending);

document.getElementById('descending').addEventListener('click', alphabeticallyDescending);

document.getElementById('nineties').addEventListener('click', sortNineties);

document.getElementById('eighties').addEventListener('click', sortEightes);

document.getElementById('seventies').addEventListener('click', sortSeventies);

document.getElementById('sixties-prior').addEventListener('click', sortSixtiesPrior);

document.getElementById('na').addEventListener('click', sortNA);

document.getElementById('full-library').addEventListener('click', showfullLibrary);
