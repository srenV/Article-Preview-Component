// Weist dem footerWrapper die konstante variable wrapper zu
const wrapper = document.querySelector('.footerWrapper');

try {
  // Hier wird wrapper ein Event Listener angefuegt der auf klicks innerhalb seines div's reagiert
  //Dieser reagiert auf JEDEN klick innerhalb von wrapper
  wrapper.addEventListener('click', function(event) {
    // nur wenn das angeklickte element die klasse shareButton besitzt wird das event getriggert
  if (event.target.classList.contains('shareButton')) {
    // hier wird wrapper die klasse active angefuegt, diese setzt den alten footer auf display none und macht den share berreich sichtbar
    wrapper.classList.toggle('active');
  }
});
} catch (error) {
  console.error("Fehler beim hinzufuegen des EL", error)
}
