# Objective 
Given an API that returns a JSON array of books, use HTML, CSS, and JavaScript to read and display the data in an organized manner. Filter the data, limit the number of records that come back, and sort the list by one or more attributes. Use vanilla JavaScript without the help of third party libraries and the use of frameworks. 

# My Solution
To see the library, simply open the index.html file. After doing so, you may click one of 8 buttons that filter and or organize the books. 

My solution has the following features:
* Sort the books alphabetically
    * A-Z
    * Z-A
* Sort the books by Era and ascending as well 
    * 90's
    * 80's
    * 70's
    * 60's and prior
    * N/A - books without data for the year property.
* Return the library to it's original state while showing the full list of books. 
* On load, show only 10 records of books.
* Fully responsive layout
* Retro styling 

# Handling Errors
The only big issue I ran into while creating the library was while trying to sort the library alphabetically. Since JavaScript is pass-by-value, like Java, when I referenced the original object by calling on the authorDescending and authorAscending functions, the original object would sort as well and when calling on the showFullLibrary function, the library would be sorted depending on the last sorting function that was called. To fix this, I created a function that creates a clone of the global object by calling the constructor function and looping through the object while copying over it's properties into the new cloned object. See below: 
```
let cloneObj = (obj) => {
    let clone = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) clone[attr] = obj[attr];
    }
    return clone;
}

```

# Tasks for Skookum Library

- [x] Create README for tasks
- [x] Wire up event listeners to filter data
- [x] Wire up ascending and descending
- [x] Set method to show full library
- [x] Set method to limit 10 books initially
- [x] Set method to return depending on decade
- [x] Refactor Code
- [x] Add CSS styles

