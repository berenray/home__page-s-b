function mail () {
    const mailPath = 'mail.php',
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog'),
    modalClose = document.querySelector('.modal__close svg');

    function opanThanksModal() {
        document.body.style.overflow = 'hidden';
        modal.style.display = 'flex';
        modalDialog.classList.remove('modal-close');
        setTimeout(()=> {
            modalDialog.classList.add('modal-translate');
        }, 1)
        setTimeout (()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 15000)
    }

    function closeModalThanks () {
        document.body.style.overflow = '';
        modalDialog.classList.remove('modal-translate');
        modalDialog.classList.add('modal-close');
        setTimeout(()=> {
            modal.style.display = 'none';
        }, 500)
    }

    document.querySelectorAll('.uniForm').forEach( (e) => {

    e.addEventListener('submit', function(e) {

        let th = this,
            params = new FormData(this),
            request = new XMLHttpRequest();

        request.open('POST', mailPath, true)
        request.send(params)

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                opanThanksModal();
                th.reset();
                console.log('hi');
            }
        }
        e.preventDefault();

        });

        modal.addEventListener('click', (event)=> {
            if(event.target == modal || event.target == modalClose) {
                closeModalThanks();
            }
        });

        document.addEventListener('keydown', (e)=> {
            if(e.code === 'Escape' && modal.style.display == 'flex') {
                closeModalThanks();
            }
        })

        // modalClose.addEventListener('click', ()=> {
        //     closeModalThanks();
        // })

    });
}

module.exports = mail