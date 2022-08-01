const nav = document.querySelector('.stickynav');
const header = document.querySelector('header');

const options = {}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changecolour')
        }
        else {
            nav.classList.add('changecolour')
            console.log('interscet')
        }
    })
}, options)

observer.observe(header)