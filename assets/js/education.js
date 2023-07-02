const loadmore = document.querySelector('.load-more');

let currentItems = 3;
loadmore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('#extra-education .timeline-items .timeline-item')];
  e.target.classList.add('show-loader');

  for (let i = currentItems; i < currentItems + 3; i++) {
    setTimeout( function() {
      e.target.classList.remove('show-loader');
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
      }
    }, 3000);
  }
  currentItems += 3;

  // Hide load button after fully load
  if (currentItems >= elementList.length) {
    event.target.classList.add('loaded');
  }
});