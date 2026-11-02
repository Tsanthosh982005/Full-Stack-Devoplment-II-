// 1. Select by ID
const title = document.getElementById('title');
console.log("By ID:", title.textContent);

// 2. Select by Class
const descriptions = document.getElementsByClassName('description');
console.log("By Class:", descriptions[0].textContent);

// 3. Select by Tag Name
const paragraphs = document.getElementsByTagName('p');
console.log("By Tag:", paragraphs.length, "paragraphs found.");

// 4. Select using querySelector (first match)
const firstHighlight = document.querySelector('.highlight');
console.log("By querySelector (first match):", firstHighlight.textContent);

// 5. Select using querySelectorAll (all matches)
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach((p, index) => {
  console.log(`Paragraph ${index + 1}: ${p.textContent}`);
});