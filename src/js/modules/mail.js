function mail () {
    const mailPath = 'mail.php',
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog'),
    modalClose = document.querySelector('.modal__close svg');

    function opanThanksModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalDialog.classList.add('fade-modal');
        setTimeout (()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 1500)
    }

    function closeModalThanks () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
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