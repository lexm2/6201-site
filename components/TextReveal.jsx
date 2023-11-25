import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextReveal( {text, classes} ) {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom center",
        //markers: true,
      },
      color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      <div className={`reveal ${classes}`}>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TextReveal;
