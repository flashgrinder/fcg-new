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

function init() {
    details.forEach((el) => el.addEventListener('toggle', onToggle));
}

export default {init}