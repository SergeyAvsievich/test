function parallax(e) {
    const layer = this.querySelector('.layer')
    layer.style.transform = `translateX(${e.clientX / 40}px)`
}

document.addEventListener('mousemove', parallax)

wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
})

wow.init();

const fadeIn = ($el, timeout) => {
    setTimeout(() => {
        $el.style.visibility = 'visible'
        $el.style.mixBlendMode = 'darken'
    }, timeout)
}

const $el = document.querySelector('video')
fadeIn($el, 1300)


function smokeMove() {
    const $smoke = document.querySelector('.smoke-img')
    $smoke.style.transform = `translateX(-20%)`
    let opacity = 0.4
    $smoke.style.opacity = opacity

    setTimeout(() => {
        opacity = 0.8
        $smoke.style.transform = `translateX(-50%)`
        $smoke.style.opacity = opacity
    }, 4000)

    setTimeout(() => {
        opacity = 0
        $smoke.style.transform = `translateX(-70%)`
        $smoke.style.opacity = opacity
    }, 8000)
}

smokeMove()