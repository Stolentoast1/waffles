let getfactbutton = document.getElementById('add-fact')
getfactbutton.addEventListener('click', function() {
  let facts = document.getElementById('facts')
  let newFact = prompt('Enter a new fact:')
  let createListItem = document.createElement('li')
  createListItem.textContent = newFact
  facts.appendChild(createListItem)
})

let images = ['images/garfield 1.jpg', "images/garfield 2.jpg", 'images/garfield 3.jpg']
let currentIndex = 0


function changeImage(direction) { // Tool to use to complete a specific task
  if (direction == 'next') {
    currentIndex = (currentIndex + 1) % images.length
  }
  // Make an if-statement that uses 'prev' to go  backwards
   if (direction == 'prev') {
     currentIndex = (currentIndex - 1 + images.length) % images.length
   }
  let picture = document.getElementById('picture')
  picture.src = images[currentIndex]
}

document.getElementById('left').addEventListener('click', function() {
  changeImage('prev')
})

document.getElementById('right').addEventListener('click', function() {
  changeImage('next')
})

