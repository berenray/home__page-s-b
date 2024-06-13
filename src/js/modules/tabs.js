function tabs () {
    const tabs = document.querySelectorAll('.projects__filter-text'),
        tabsContent = document.querySelectorAll('.projects__filter-wrapper'),
        tabsCardFirst = document.querySelectorAll('.projects__card-first'),
        tabsCardSecond = document.querySelectorAll('.projects__card-second'),
        tabsCardThird = document.querySelectorAll('.projects__card-third'),
        tabsParent = document.querySelector('.projects__btns');

    function hideTabs () {
        tabs.forEach(item => {
            item.classList.remove('projects__filter-text-active')
        })
        tabsContent.forEach(item => {
            item.classList.remove('projects__filter-wrapper-active');
        })
    }

    function showTabs (i = 0) {
        tabs[i].classList.add('projects__filter-text-active');
        tabsContent[i].classList.add('projects__filter-wrapper-active');
    }

    hideTabs();
    showTabs(0);

    // Animation functions

        // hide

    function hideTabsAnimationFirst() {
        tabsCardSecond.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
        tabsCardThird.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }
    
    function hideTabsAnimationSecond() {
        tabsCardFirst.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
            const last = item.classList.contains('projects__card-last')
            if(last){
                last.classList.remove('wow')
            }
        })
        tabsCardThird.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }

    function hideTabsAnimationThird() {
        tabsCardFirst.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
        tabsCardSecond.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }

        // Show

    function tabsAnimFirst () {
        tabsCardFirst.forEach((item, index) => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
        })
    }
    function tabsAnimSecond () {
        tabsCardSecond.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
            }, index * 100)
        })
    }

    function tabsAnimThird () {
        tabsCardThird.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
            }, index * 100)
        })
    }


    tabsParent.addEventListener('click', (e) =>{
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('projects__filter-text')){
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabs();
                    showTabs(i);
                    if(i == 0) {
                        tabsAnimFirst();
                        hideTabsAnimationFirst();
                    }
                    if(i == 1) {
                        tabsAnimSecond();
                        hideTabsAnimationSecond();
                    }
                    if(i == 2) {
                        tabsAnimThird();
                        hideTabsAnimationThird();
                    }
                }
            })
        }
    })
}

module.exports = tabs