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
