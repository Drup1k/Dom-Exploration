document.title = "Modifying the DOM";

document.body.style.backgroundColor = '#FF69B4';

// Get the second child element of the <body>
// let secondChild = document.body.children[1];

// Display all child elements of the second child element
// for (let child of secondChild.children) {console.log(child);}

// Display all child elements of the <body>
for (let child of document.body.children) {
    console.log(child);
}