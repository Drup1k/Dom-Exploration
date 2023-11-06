var importantElements = document.querySelectorAll('.important');
importantElements.forEach(function(element) {
    element.setAttribute('title', 'This is an important item');
  });

// Select all img elements
var images = document.getElementsByTagName('img');

// Loop through the NodeList of img elements
for (var i = 0; i < images.length; i++) {
    // Check if the img does not have the 'important' class
    if (!images[i].classList.contains('important')) {
    // Change the display property to 'none'
    images[i].style.display = 'none';
    }
}

var paragraphs = document.getElementsByTagName('p');

// Loop through the NodeList of paragraph elements
    Array.prototype.forEach.call(paragraphs, function(paragraph) {
// Log the content of the paragraph to the console
    console.log(paragraph.textContent);

// If the paragraph has a class, log its classname(s) as well
    if (paragraph.classList.length) {
    console.log('Classname:', paragraph.className);
}
});

  
// Select all paragraph elements
    var paragraphs = document.getElementsByTagName('p');
  
// Function to generate a random color
    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
// Loop through the NodeList of paragraph elements
    Array.prototype.forEach.call(paragraphs, function(paragraph) {
    // Check if the paragraph has no class
    if (paragraph.classList.length === 0) {
    // Assign a random color to the paragraph
    paragraph.style.color = getRandomColor();
    }
});

