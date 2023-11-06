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
