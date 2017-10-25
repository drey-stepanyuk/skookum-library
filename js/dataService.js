// Different data services including rendering the data, cloning objects, and cleaning them
const dataService = (() => {
    
    // Renders data inside of the html 
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
    };

    // Cleans object for falsy data
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

    // Creates a copy of an object
    let cloneObj = (obj) => {
        let clone = obj.constructor();
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) clone[attr] = obj[attr];
        }
        return clone;
    }

    return {
        renderData: renderData,
        cleanFalsyObj: cleanFalsyObj,
        cleanFalsyProp: cleanFalsyProp,
        cloneObj: cloneObj
    };
})();