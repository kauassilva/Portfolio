// Extra education Timeline
const loadmore1 = document.querySelector('#load-more-1');

let currentItems1 = 3;

loadmore1.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('#extra-education-1 .timeline-items .timeline-item')];
  e.target.classList.add('show-loader');
  
  for (let i = currentItems1; i < currentItems1 + 3; i++) {
    setTimeout( function() {
      e.target.classList.remove('show-loader');
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
      }
    }, 3000);
  }
  currentItems1 += 3;
  
  // Hide load button after fully load
  if (currentItems1 >= elementList.length) {
    event.target.classList.add('loaded');
  }
});



// Certificates Timeline
const loadmore2 = document.querySelector('#load-more-2');

let currentItems2 = 3;

loadmore2.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('#extra-education-2 .timeline-items .timeline-item')];
  e.target.classList.add('show-loader');

  for (let i = currentItems2; i < currentItems2 + 3; i++) {
    setTimeout( function() {
      e.target.classList.remove('show-loader');
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
      }
    }, 3000);
  }
  currentItems2 += 3;

  // Hide load button after fully load
  if (currentItems2 >= elementList.length) {
    event.target.classList.add('loaded');
  }
});