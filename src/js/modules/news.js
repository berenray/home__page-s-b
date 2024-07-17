function news () {
    const card = document.querySelectorAll('.news__card'),
        cardText = document.querySelectorAll('.news__card-text');
        maxVisibility = 3;
    let currentIndex = 0,
        intervalId;

    function updateVisibility () {
        card.forEach((item,i) => {
            if(i < maxVisibility) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    updateVisibility();
    
    function openItem (index) {
        card.forEach(item => {
            item.classList.remove('news__card-active')
        })
        cardText.forEach(item => {
            item.classList.remove('animate__animated');
            item.classList.remove('animate__fadeInUp');
        })
        card[index].classList.add('news__card-active');
        cardText[index].classList.add('animate__animated');
        cardText[index].classList.add('animate__fadeInUp');
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(switchNextItem, 20000)
    }

    card.forEach((item, index) => {
        item.addEventListener('click', ()=> {
            currentIndex = index;
            openItem(index);
            resetInterval();
        })
    })

    function switchNextItem () {
        currentIndex++;
        if(currentIndex >= card.length) {
            currentIndex = 0;
        }
        openItem(currentIndex);
    }

    openItem(currentIndex);

    intervalId = setInterval(switchNextItem, 20000)
}

module.exports = news