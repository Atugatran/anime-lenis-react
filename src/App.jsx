import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useGSAP(() => {
    document.querySelectorAll('.animation').forEach((el) => {
      let image = el.querySelector('img')
      let tl = gsap.timeline()

      let xTransform = gsap.utils.random(-100, 100)

      tl.set(
        image, {
        transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
      }, "start"
      ).to(
        image, {
        scale: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      }, "start"
      ).to(el, {
        xPercent: xTransform,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    })
  })

  return (
    <main>
      <div className="submain">
        <div className="animation" style={{ "--r": 1, "--c": 3 }}><img src="./img/1.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 1, "--c": 7 }}><img src="./img/2.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 2, "--c": 2 }}><img src="img/3.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 2, "--c": 6 }}><img src="img/4.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 3, "--c": 4 }}><img src="img/5.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 3, "--c": 8 }}><img src="img/6.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 4, "--c": 1 }}><img src="img/7.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 4, "--c": 4 }}><img src="img/8.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 5, "--c": 2 }}><img src="img/9.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 5, "--c": 6 }}><img src="img/10.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 6, "--c": 3 }}><img src="img/11.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 6, "--c": 7 }}><img src="img/12.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 7, "--c": 5 }}><img src="img/13.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 7, "--c": 8 }}><img src="img/14.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 8, "--c": 1 }}><img src="img/15.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 8, "--c": 4 }}><img src="img/16.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 9, "--c": 2 }}><img src="img/17.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 9, "--c": 6 }}><img src="img/18.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 10, "--c": 3 }}><img src="img/19.jpg" alt="img1" /></div>
        <div className="animation" style={{ "--r": 10, "--c": 7 }}><img src="img/20.jpg" alt="img1" /></div>
      </div>

      <div className="fixed-div">
        <h1>ANIME</h1>
      </div>
    </main>
  )
}

export default App