import { specImg, monitoringFrame } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {

  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom"
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut"
    })

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut"
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={specImg} alt="chip" width={450} height={450} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Elegant Technology.
            <br /> Favorite game, movie or song.
          </h2>

          <p className="hiw-subtitle">
            It's is just a few taps away. Use the center touchscreen to stream media, customize your vehicle, navigate to your destination and more.
          </p>
        </div>

        <div className="mt-10 md:mt:20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={monitoringFrame} 
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3">Monotoring</p>
          </div>

          <div className="hiw-text-container">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                Model 3 benefits from the same features {' '}
                <span className="text-white">
                  that make our other vehicles so safe: energy-absorbing side sills,
                </span>.
              </p>

              <p className="hiw-text g_fadeIn">
                A fortified battery {' '}
                <span className="text-white">
                  pack mounted low in the vehicle to reduce rollover risk and a metal body structure that can withstand many times the car’s weight.
                </span>,
                Active safety features like automatic emergency braking come standard.
              </p>
            </div>
          
            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Remote Access</p>
              <p className="hiw-text">Control everything from one do-it-all Tesla app.</p>
            </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks