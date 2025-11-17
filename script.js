let theme = false;



function switchTheme() {
  // TODO: implement toggling the light/dark theme
  

  const navbar = document.getElementById('navbar');
  const cards = document.querySelectorAll('.card');
  const table = document.querySelectorAll('.table');
  const cardCol = document.querySelectorAll('.column');
  const footerText = document.querySelector('.navbar-text');
  const h1id = document.getElementById('h1id');



  if (theme == false) {
    document.body.classList.add('bg-dark');
    navbar.classList.remove('navbar-light','bg-light');
    navbar.classList.add('navbar-dark','bg-dark');

    cards.forEach(card => {
    card.classList.remove('bg-light');
    card.classList.add('bg-dark', 'text-light', 'border-light');
  });

  table.forEach(table => {
    table.classList.add('table-dark', 'text-green');
  });

  cardCol.forEach(cardCol => {
    cardCol.classList.remove('col');
    cardCol.classList.add('col-12');    
  });

  footerText.style.paddingLeft = '1700px';
  footerText.style.display = 'block';
  footerText.classList.add('text-white'); 

  h1id.innerHTML = 'This is the Dark Theme';
  h1id.classList.add("text-white");
  }
else {
  document.body.classList.remove('bg-dark');
 
  navbar.classList.remove('navbar-dark','bg-dark');
  navbar.classList.add('navbar-light','bg-light');
  

  cards.forEach(card => {
    card.classList.remove('bg-dark', 'text-light', 'border-light');
    card.classList.add('bg-light');
  });

  table.forEach(table => {
    table.classList.remove('table-dark', 'text-green');
  });

  cardCol.forEach(cardCol => {
    cardCol.classList.remove('col-12');
    cardCol.classList.add('col');
  });

}
theme = !theme
}