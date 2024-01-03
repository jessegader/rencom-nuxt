import gsap from 'gsap'

export function gsapHero() {
    const glitchlogo = document.querySelector('.content .glitch')
    
    const video = document.querySelector('video')
    video.muted = true
    video.pause()
    gsap.set('.n-layout-content', { opacity: 0})
    const diff = [15, 25, 35, 50]
    const getRandom = () => [...Array(4).keys()].sort(() => Math.random() - 0.5).slice(0, 1)
    
    const glitchOne = () => {
        const even = document.querySelectorAll('#glitch1 g:nth-child(even)')
        const odd = document.querySelectorAll('#glitch1 g:nth-child(odd)')
        const extra = document.querySelectorAll('#extra1 rect')
        gsap.set([even, odd], { y: 0, x: 0, opacity: 0 })
        even.forEach((el, i) => {
            const tl11 = gsap.timeline()
            tl11.to(el, {
                yoyo: true,
                repeat: 1,
                y: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()]}`,
                x: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()] / 10}`,
                opacity: diff[getRandom()] / 140,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
        odd.forEach((el, i) => {
            const tl12 = gsap.timeline()
            tl12.to(el, {
                yoyo: true,
                repeat: 1,
                y: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()]}`,
                x: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()] / 10}`,
                opacity: diff[getRandom()] / 70,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
        extra.forEach((el, i) => {
            const tl13 = gsap.timeline()
            tl13.to(el, {
                yoyo: true,
                repeat: 1,
                y: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()] * 1.5}`,
                x: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()] * 1.5}`,
                opacity: diff[getRandom()] / 200,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
    }
    const glitchTwo = () => {
        const even = document.querySelectorAll('#glitch2 g:nth-child(even)')
        const odd = document.querySelectorAll('#glitch2 g:nth-child(odd)')
        const extra = document.querySelectorAll('#extra2 path')
        gsap.set([even, odd], { y: 0, x: 0, opacity: 0 })
    
        even.forEach((el, i) => {
            const tl21 = gsap.timeline()
            tl21.to(el, {
                yoyo: true,
                repeat: 3,
                y: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()]}`,
                x: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()] / 10}`,
                opacity: diff[getRandom()] / 140,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
        odd.forEach((el, i) => {
            const tl22 = gsap.timeline()
            tl22.to(el, {
                yoyo: true,
                repeat: 3,
                y: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()]}`,
                x: `${i % 2 == 0 ? '+' : '-'}${el && diff[getRandom()] / 10}`,
                opacity: diff[getRandom()] / 70,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
        extra.forEach((el, i) => {
            const tl23 = gsap.timeline()
            tl23.to(el, {
                yoyo: true,
                repeat: 3,
                y: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()] * 1.5}`,
                x: `${i % 2 == 0 ? '-' : '+'}${el && diff[getRandom()] * 1.5}`,
                opacity: diff[getRandom()] / 200,
                duration: 0.05,
                stagger: 0.01,
                ease: 'rough',
            })
        })
    }
    const glitch = () => {
        const tl = gsap.timeline()
        gsap.set('#glitch1, #glitch2, #glitch0, #extra1, #extra2', { opacity: 0 })
        tl.to('#glitch1', { delay: 3.5, opacity: 1 })
            .to('#glitch1, #extra2', { opacity: 0, duration: 0.05 }, '>')
            .add(glitchOne, 1)
            .to('#glitch2, #extra1', { opacity: 1, duration: 0.05, x: -50, y: 25 }, '>')
            .add(glitchTwo, 1.05)
            .to('#glitch2, #extra1', { opacity: 0, duration: 0.05, x: 0, y: 0 }, '>')
            .add(glitchOne, 1.1)
            .to('#glitch1, #extra2', { opacity: 1, duration: 0.05, x: 50, y: -25 }, '>')
            .add(glitchTwo, 1.15)
            .to('#glitch2', { opacity: 0, duration: 0.05 }, '>')
            .add(glitchTwo, 1.2)
            .to('#glitch1, #extra2', { opacity: 0, duration: 0.05, x: 0, y: 0 }, '>')
            .add(glitchOne, 1.25)
            .to('#glitch2', { opacity: 1, duration: 0.05, x: -25, y: -50 }, '>')
            .add(glitchTwo, 1.3)
            .to('#glitch2', { opacity: 0, duration: 0.05, x: 0, y: 0 }, '>')
            .to('#glitch1', { opacity: 1, duration: 0.05 }, '>')
            .add(glitchTwo, 1.45)
            .to('#glitch2', { opacity: 1, duration: 0.05 }, '>')
            .add(glitchTwo, 1.55)
            .to('#glitch2', { opacity: 0, duration: 0.05 }, '>')
            .add(glitchTwo, 1.6)
            .to('#glitch1', { opacity: 0, duration: 0.05 }, '>')
            .add(glitchOne, 1.65)
            .to('#glitch2, #extra1', { opacity: 1, duration: 0.05 }, '>')
            .add(glitchTwo, 1.7)
            .to('#glitch2, #extra1', { opacity: 0, duration: 0.05 }, '>')
            .to('#glitch0', { opacity: 1, duration: 0.05 }, '>')
    }
    const glitchHover = () => {
        gsap.set('#glitch0', { opacity: 0})

        const tlh = gsap.timeline()
        tlh
            .timeScale(0.35)
            .to('#glitch2', { opacity: 0, duration: 0.05 })
            .to('#glitch1, #extra2', { opacity: 0.8, duration: 0.05 })
            .add(glitchOne, 0.15)
            .to('#glitch2', { opacity: 1, duration: 0.05, x: -50, y: 25 }, '>')
            .add(glitchTwo, 0.2)
            .to('#glitch2, #extra2', { opacity: 0, duration: 0.05, x: 0, y: 0 }, '>')
            .add(glitchOne, 0.25)
            .to('#extra1', { opacity: 0.8, duration: 0.05, x: 50, y: -25 }, '>')
            .add(glitchTwo, 0.3)
            .to('#glitch2', { opacity: 0, duration: 0.05 }, '>')
            .add(glitchTwo, 0.35)
            .to('#glitch1, #extra1', { opacity: 0, duration: 0.05, x: 0, y: 0 }, '>')
            .add(glitchOne, 0.4)
            .to('#glitch2', { opacity: 0, duration: 0.05 }, '>')
    }
    const glitchLeave = () => {
        gsap.set('#glitch0', { opacity: 1})
    }

    const glitchLoop = () => {
        const tlh = gsap.timeline()
        tlh
            .timeScale(0.35)
            .to('#glitch0', { opacity: 0, duration: 0.01 }, '>')
            .to('#glitch2', { opacity: 0, duration: 0.05 })
            .to('#glitch1', { opacity: 1, duration: 0.05 })
            .to('#glitch1', { opacity: 1, duration: 0.01 })
            .add(glitchOne, 0.15)
            .to('#glitch2', { opacity: 1, duration: 0.05, x: -50, y: 25 }, '>')
            .add(glitchTwo, 0.2)
            .to('#glitch2', { opacity: 0, duration: 0.01, x: 0, y: 0 }, '>')
            .to('#glitch0', { opacity: 1, duration: 0 }, '>')
    }
    // fade in home
    gsap.to('.n-layout-content', { opacity: 1, duration: 0.5 })
    video.play()
    glitch()
    glitchlogo.addEventListener('mouseover', glitchHover)
    glitchlogo.addEventListener('mouseleave', glitchLeave)
    // setInterval(() => glitchLoop(), 15000)
  }


