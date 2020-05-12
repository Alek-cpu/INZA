const dDrope = () => {
    const cards = document.querySelectorAll('.card');
    const cell = document.querySelector('.drag-drop-wrapper');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (e) {
        e.preventDefault();

        console.log('over');
    };

    const dragEnter = function () {
        console.log('enter');
    };

    const dragLeave = function () {
        console.log('leave');
        this.classList.remove('hovered');
    };

    const dragDrop = function () {
        console.log('drop');
        cell.classList.remove('hide');
        cell.appendChild(this);//ячейки принимает в себя
    };

        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);

    cards.forEach((card) => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
        card.addEventListener('drop', dragDrop);
    });
 }
 dDrope();
