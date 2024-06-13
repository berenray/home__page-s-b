function slider() {
    const slides = document.querySelectorAll('.slider__item');

    let index = 0;

    const interval = setInterval(()=> {
        slides[index].classList.remove('slider__item-active');
        index++;
        if(index >= slides.length){
            index = 0
        }
        slides[index].classList.add('slider__item-active');
    }, 40000)
}

module.exports = slider