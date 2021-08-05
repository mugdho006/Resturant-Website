const barsicon = document.querySelector('.bars__icon');
const hamNav = document.querySelector('.hamburger__navbar');

/* if someone click the bar icon */
barsicon.addEventListener('click', () => {
    if(hamNav.classList.contains('hamburger__navbar__active')) { // the nav will appear if it does not contain the lcass
        hamNav.classList.remove('hamburger__navbar__active')
        
        

    } else{
        hamNav.classList.add('hamburger__navbar__active')
        const activeNav = document.querySelector('.hamburger__navbar__active')

    }
})