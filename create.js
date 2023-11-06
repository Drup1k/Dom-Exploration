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


//   const backgroundColor = "rgb(" + red + "," + green + "," + bleu +")";
//   SectionElement.style.backgroundColor - backgroundColor;

//   luminance = 0.2126 * (red / 255) + 0.7152 * (green / 255) + 0.0722 * (blue / 255);

//   if (luminance > 0.5) {
    // const learnerParagraph = document.createElement(tagName:"p");
    // learnerParagraph.style.color = "black";
    // learnerParagraph.textContent = learners;
//   }

//   console.log(luminance) 

  document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the color is dark
    function isDarkColor(bgColor) {
      // Strip any leading #
      if (bgColor.charAt(0) === '#') {
        bgColor = bgColor.slice(1);
      }
      
      // Parse the hex color
      var r = parseInt(bgColor.substr(0, 2), 16);
      var g = parseInt(bgColor.substr(2, 2), 16);
      var b = parseInt(bgColor.substr(4, 2), 16);
  
      // Calculate the luminance
      var uicolors = [r / 255, g / 255, b / 255];
      var c = uicolors.map((col) => {
        if (col <= 0.03928) {
          return col / 12.92;
        } else {
          return Math.pow((col + 0.055) / 1.055, 2.4);
        }
      });
      var luminance = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
      
      // Return true if the color is dark
      return luminance < 0.179;
    }
  
    // Function to set the text color based on background color
    function setTextColorForBg(section) {
      var bgColor = getComputedStyle(section).backgroundColor;
      
      // Convert rgb to hex if needed
      var hexColor = rgbToHex(bgColor);
      
      if (isDarkColor(hexColor)) {
        section.style.color = 'white';
      }
    }
  
    // Convert rgb color to hex
    function rgbToHex(rgb) {
      if (rgb.indexOf('#') === 0) return rgb;
      
      var parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      delete(parts[0]);
      
      for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
      }
      
      return '#' + parts.join('');
    }
  
    // Select all sections
    var sections = document.querySelectorAll('section');
  
    // Loop through the sections and set the text color if the background is dark
    sections.forEach(function(section) {
      setTextColorForBg(section);
    });
  });