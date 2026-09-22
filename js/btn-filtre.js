let btnMasquer = document.querySelector('.btn-camouflage');
let formulaire = document.querySelector('.selction-preferences');

btnMasquer.addEventListener('click', function () {

    let currentAttribute = btnMasquer.getAttribute("aria-expanded");

    if (currentAttribute === "true") {
          // Si le formulaire était affiché, on le cache
          btnMasquer.setAttribute("aria-expanded", "false");
          btnMasquer.textContent = "Afficher les filtres";
          formulaire.classList.add('masquer');
        } 
        else {
          // Si le formulaire était caché, on l'affiche
          btnMasquer.setAttribute("aria-expanded", "true");
          btnMasquer.textContent = "Masquer les filtres";
          formulaire.classList.remove('masquer');
        }
});