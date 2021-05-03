import {additionalSlider, sliderCases, tarrifsSlider} from "../libs/modules/sliders.js"
// import details from "../libs/modules/accardion.js"

window.addEventListener('DOMContentLoaded', (e) => {

    let haveCases = document.querySelector('.cases');
    let haveAdditionalSlider = document.querySelector('.additional-serv');
    let haveTarrifsSlider = document.querySelector('.tarrifs_slider');

    if (haveCases) {
        sliderCases.init();
    }

    if (haveAdditionalSlider) {
        additionalSlider.init();
    }

    if (haveTarrifsSlider) {
        tarrifsSlider.init();
    }
    
    // details.init();

    let details = Array.from(document.querySelectorAll('.accardion > details'));

    function onToggle(event) {
        let detailsOpen = Array.from(document.querySelectorAll('.accardion > details[open]'));
        
        if (event.currentTarget.open) {
            detailsOpen.forEach((el) => {

                if (el === event.currentTarget) {
                    return;
                }

                el.open = false;
            })
        }
    }

    details.forEach((el) => el.addEventListener('toggle', onToggle));
    
    

});