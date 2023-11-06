// An array of learner names
var learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

// Function to generate a random background color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Find the article element
  var article = document.querySelector('article');
  
  // Check if article exists
  if (!article) {
    // If not, create it and append to the body or another element of choice
    article = document.createElement('article');
    document.body.appendChild(article); // or append it where it needs to be
  }

  // Create a section for each learner
  learners.forEach(function(learner) {
    // Create a new section element
    var section = document.createElement('section');
    
    // Set a random background color
    section.style.backgroundColor = getRandomColor();

    // Create a new paragraph element
    var paragraph = document.createElement('p');
    
    // Add the learner's name as text content
    paragraph.textContent = learner;

    // Append the paragraph to the section
    section.appendChild(paragraph);

    // Append the section to the article
    article.appendChild(section);
  });