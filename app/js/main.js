$(function () {


    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO1 = new IntersectionObserver(callback, { threshold: 1 })
    const IO2 = new IntersectionObserver(callback, { threshold: 1 })
    const IO3 = new IntersectionObserver(callback, { threshold: 1 })

    const el1 = document.querySelector('.statistics__num1')
    const el2 = document.querySelector('.statistics__num2')
    const el3 = document.querySelector('.statistics__num3')


    IO1.observe(el1)
    IO2.observe(el2)
    IO3.observe(el3)



});