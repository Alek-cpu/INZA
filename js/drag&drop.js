const dragNDrop = () => {
    const cards = document.querySelectorAll('.card');
    const basket = document.querySelectorAll('.deleted');

function removeCard () {
        for ( let i = 0; i < basket.length; i++ ) {
            for (let j = 0; j < cards.length; j++) {
                basket[i].addEventListener('click', function (e) {
                    if ( i === j ) {
                        cards[i].remove();
                    }
                })
            }
        }
    }
    removeCard();

}
dragNDrop();

// THIS_THIS






