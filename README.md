# dom-exploration

Introduction





• Display the document title in the console
	• console.log(document.title);
• Change the document title to Modifying the DOM
	• document.title = "Changed title";
• Change the background color of the body to hot pink (#FF69B4). 
	• document.body.style.backgroundColor = '#FF69B4';
• If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
	• 
• Using the children method and a for ... of  loop, display every children elements of the second child element of your document (display all children elements of the <body>)
	• document.querySelectorAll('*'); ---> in console display all elements
	for (let child of document.body.children) {
	    console.log(child);} ---> will display children in console 
	
	
	
DOM Selectors

• Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
	
	var importantElements = document.querySelectorAll('.important');
	importantElements.forEach(function(element) {
	    element.setAttribute('title', 'This is an important item');
	  }); ---> this will add title to elements with class .important
	
• Select all the img tags and loop through them. If they have no important class, turn their display property to none
	
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
	
	
• Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

	// Select all paragraph elements
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
	
	
• Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
	
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
	
Creating nodes

• Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
	
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
	
• If the background is dark the text should be white, if the background is light the text should be black
	
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
	
• Find a way so that everytime you load the page the order of the elements changes.



Navigeer door de DOM-structuur



Selecteer het laatste kind van de <ol>tag en plaats deze aan het begin van de lijst
	
	// Select the <ol> element
	    var list = document.querySelector('ol');
	  
	    // Select the last <li> element which is the last child of the <ol>
	    var lastItem = list.lastElementChild;
	  
	    // Move the last <li> to be the first child of the <ol>
	    if (lastItem) {
	      list.insertBefore(lastItem, list.firstElementChild);
	    }
	
Verplaats de <h2>derde sectie in de tweede en omgekeerd
	
	// Select the <h2> element
	var list = document.querySelector('h2');
	  
	// Select the last <li> element which is the last child of the <ol>
	var lastItem = list.lastElementChild;
	// Move the last <li> to be the first child of the <ol>
	if (lastItem) {
	  list.insertBefore(lastItem, list.firstElementChild);
	}
	
Verwijder de laatste sectie uit de DOM, we hebben deze toch niet nodig
	
	// Select the sections
	    var sections = document.querySelectorAll('main > section');
	  
	    // Check if we have at least three sections
	    if(sections.length >= 3) {
	      // The second section is at index 1 and the third at index 2
	      var secondSection = sections[1];
	      var thirdSection = sections[2];
	  
	      // Select the <h2> elements within those sections
	      var secondSectionHeading = secondSection.querySelector('h2');
	      var thirdSectionHeading = thirdSection.querySelector('h2');
	  
	      // Clone the headings to swap them to avoid DOM issues
	      var clonedSecondSectionHeading = secondSectionHeading.cloneNode(true);
	      var clonedThirdSectionHeading = thirdSectionHeading.cloneNode(true);
	  
	      // Replace the headings
	      secondSection.replaceChild(clonedThirdSectionHeading, secondSectionHeading);    
	      thirdSection.replaceChild(clonedSecondSectionHeading, thirdSectionHeading);
	    }
	

Working with events

• Everytime the user clicks on one of the action squares
	• Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
	• Create a new <li> in the log below to state when the action was done
		
		const _initTime = Date.now();
		const getElapsedTime = () => {
		  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
		};
		const clickOnSquare = (e) => {
		  // Create new div with the corresponding color
		  const newDiv = document.createElement('div');
		  newDiv.className = 'displayedsquare';
		  newDiv.style.backgroundColor = e.target.classList[1]; // Assuming the color is the second class on the div
		  document.querySelector('.displayedsquare-wrapper').appendChild(newDiv);
		  // Create new log item
		  const newLogItem = document.createElement('li');
		  newLogItem.textContent = `Square with color ${e.target.classList[1]} clicked at ${getElapsedTime()}.`;
		  document.querySelector('main section:nth-child(3) ul').appendChild(newLogItem); // Assuming the log is in the third section within main
		};
		// Attach the click event handler to each square
		const actionSquares = document.querySelectorAll('.actionsquare');
		for (let actionSquare of actionSquares) {
		  actionSquare.addEventListener('click', clickOnSquare);
		}
		

• Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
	○ When the spacebar is hit randomly change the background color of the whole page
	○ Log when the spacebar is used the same way you used for the generated squares.
	○ When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
	○ When the s key is pressed the squares get deleted (erases the generated squares)
• Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square


		document.body.addEventListener('keypress', function(event) {
		  if (event.code === 'Space') {
		    // Change background color when spacebar is hit
		    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		    document.body.style.backgroundColor = randomColor;
		    
		    // Log the spacebar action
		    const newLogItem = document.createElement('li');
		    newLogItem.textContent = `Spacebar hit at ${getElapsedTime()}: Background changed to ${randomColor}`;
		    document.querySelector('main section:nth-child(3) ul').appendChild(newLogItem);
		  } else if (event.key === 'l') {
		    // Delete all log entries when 'l' key is pressed
		    const log = document.querySelector('main section:nth-child(3) ul');
		    while (log.firstChild) {
		      log.removeChild(log.firstChild);
		    }
		  } else if (event.key === 's') {
		    // Delete all displayed squares when 's' key is pressed
		    const displayedSquaresWrapper = document.querySelector('.displayedsquare-wrapper');
		    while (displayedSquaresWrapper.firstChild) {
		      displayedSquaresWrapper.removeChild(displayedSquaresWrapper.firstChild);
		    }
		  }
		});
		// Function to handle clicking on a generated square
		const addClickEventToSquares = () => {
		  const displayedSquares = document.querySelectorAll('.displayedsquare');
		  displayedSquares.forEach(square => {
		    square.addEventListener('click', function() {
		      alert(`Color of clicked square: ${square.style.backgroundColor}`);
		    });
		  });
		};
		// Modify the clickOnSquare function to call addClickEventToSquares
		const clickOnSquare = (e) => {
		  // Create new div with the corresponding color
		  const newDiv = document.createElement('div');
		  newDiv.className = 'displayedsquare';
		  newDiv.style.backgroundColor = e.target.classList[1]; // Assuming the color is the second class on the div
		  document.querySelector('.displayedsquare-wrapper').appendChild(newDiv);
		  // Create new log item
		  const newLogItem = document.createElement('li');
		  newLogItem.textContent = `Square with color ${e.target.classList[1]} clicked at ${getElapsedTime()}.`;
		  document.querySelector('main section:nth-child(3) ul').appendChild(newLogItem);
		  
		  // Add click event to the new square
		  addClickEventToSquares();
		};
		// Attach the click event handler to each action square
		const actionSquares = document.querySelectorAll('.actionsquare');
		for (let actionSquare of actionSquares) {
		  actionSquare.addEventListener('click', clickOnSquare);
		}
		// Initial call to add click events to any squares that may already exist
		addClickEventToSquares();
		
		--------------------------------------------------------------------------
		
		//Event Listener for Keypress on <body>
		
		document.body.addEventListener('keypress', function(event) { // ... Event handling code ...}); 
		
		//This code attaches an event listener to the entire <body> of the document. It listens for a keypress event, which is triggered whenever a user presses a key while the //page is focused.
		
		//Random Background Color on Spacebar Press
		
		if(event.code=== 'Space') { 
		constrandomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16); document.body.style.backgroundColor= randomColor;
		 // ... Code to log the action ...} 
		
		//When the keypress event occurs, the script checks if the pressed key is the spacebar (event.code === 'Space'). If so, it generates a random color and applies it to the //background of the body.
		//• Math.random() * 16777215 generates a random number between 0 and 16777215 (the maximum value for a 24-bit color).
	//	• .toString(16) converts that number to a hexadecimal string, which is a valid color code.
		
		//Logging Spacebar Action
		//Still inside the spacebar condition:
		
		constnewLogItem = document.createElement('li'); newLogItem.textContent = `Spacebar hit at ${getElapsedTime()}: Background changed to ${randomColor}`; document.querySelector('main section:nth-child(3) ul').appendChild(newLogItem); 
		
	//	A new list item (<li>) is created to log the spacebar action. It's populated with the text stating the event and the time it happened, then appended to the unordered //list (<ul>) in the third section within <main>. This assumes that the log is located there in your HTML structure.
		
		//Deleting Log Entries on 'l' Key Press
		
		} elseif(event.key=== 'l') { constlog = document.querySelector('main section:nth-child(3) ul'); while(log.firstChild) { log.removeChild(log.firstChild); } } 
		
		//If the 'l' key is pressed, the script selects the log container and removes all its child elements, effectively clearing the log.
		
		//Deleting Displayed Squares on 's' Key Press
		
		} elseif(event.key=== 's') { constdisplayedSquaresWrapper = document.querySelector('.displayedsquare-wrapper'); while(displayedSquaresWrapper.firstChild) { displayedSquaresWrapper.removeChild(displayedSquaresWrapper.firstChild); } } 
		
		//If the 's' key is pressed, it does something similar to the log deletion, but this time it targets the container for displayed squares (.displayedsquare-wrapper) and //clears all its child elements, removing all the displayed squares.
		
	//	Clicking on a Generated Square
		
		//The addClickEventToSquares function:
		
		constaddClickEventToSquares= () => { // ... Code to add click event to squares ...}; 
		
	//	This function is designed to attach a click event to each square displayed. When a square is clicked, it shows an alert with the color of that square.
		
//Handling Square Creation and Logging
		
		//The clickOnSquare function is bound to the click event of each .actionsquare:
		
		constclickOnSquare= (e) => { // ... Code to create a displayed square and log the event ...}; constactionSquares = document.querySelectorAll('.actionsquare'); 
    for(letactionSquare ofactionSquares) { actionSquare.addEventListener('click', clickOnSquare); } 
		
		//Whenever an action square is clicked, this function creates a new div with the color class that was clicked, adds it to the displayed squares section, and logs the       
    //action. It then calls addClickEventToSquares to ensure the newly added square also has a click event listener attached.
		
		//Initialization Call
		
		//Finally, the script calls addClickEventToSquares to make sure any squares that are already on the page when the script runs have the click event listener attached:
		
		addClickEventToSquares(); 
		
		
		
		--------------------------------------------------
		

Forms

• Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
	
	// Synchronize the first input field with the <span> element and -
	// show 'firstname' beside the form field
	document.getElementById('firstname').addEventListener('keyup', function() {
	document.getElementById('display-firstname').textContent = this.value;
	})
	

• Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
	
	// Control the visibility of a section based on age input and display certain text
	document.getElementById('age').addEventListener('keyup', function() {
	    var age = parseInt(this.value, 10);
	    document.getElementById('a-hard-truth').style.visibility = age >= 18 ? 'visible' : 'hidden';
	})
	
• Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
	
	// Validate password length and match on keyup - highlight in red if pwd is not correct or not matching
	function validatePasswords() {
	    const pwd = document.getElementById('pwd');
	    const pwdConfirm = document.getElementById('pwd-confirm');
	    const isValid = pwd.value.length >= 6 && pwd.value === pwdConfirm.value;
	        pwd.style.backgroundColor = isValid ? 'white' : 'red';
	        pwdConfirm.style.backgroundColor = isValid ? 'white' : 'red';
	}
	document.getElementById('pwd').addEventListener('keyup', validatePasswords);
	document.getElementById('pwd-confirm').addEventListener('keyup', validatePasswords);
	
• Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
	
	// Toggle dark mode using the <select> field
	document.getElementById('toggle-darkmode').addEventListener('change', function() {
	    const body = document.body;
	    if (this.value === 'dark') {
	        body.style.backgroundColor = 'black';
	        body.style.color = 'white';
	    } else {
	        body.style.backgroundColor = 'white';
	        body.style.color = 'black';
	    }
	});
