// document.addEventListener('DOMContentLoaded', function() {
    // Select the <ol> element
    var list = document.querySelector('ol');
  
    // Select the last <li> element which is the last child of the <ol>
    var lastItem = list.lastElementChild;
  
    // Move the last <li> to be the first child of the <ol>
    if (lastItem) {
      list.insertBefore(lastItem, list.firstElementChild);
    }
//   });

// Select the <h2> element
var list = document.querySelector('h2');
  
// Select the last <li> element which is the last child of the <ol>
var lastItem = list.lastElementChild;

// Move the last <li> to be the first child of the <ol>
if (lastItem) {
  list.insertBefore(lastItem, list.firstElementChild);
}
  


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