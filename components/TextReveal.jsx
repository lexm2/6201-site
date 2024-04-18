import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function TextReveal({ text, classes }) {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  const controls = useAnimation();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const isInView = useInView(triggerRef, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        color: getComputedStyle(document.documentElement).getPropertyValue(
          "--text-color"
        ),
        transition: {
          duration: 5,
          stagger: 1,
        },
      });
    }
  }, [isInView, controls]);

  return (
    <>
      <div className={`reveal ${classes}`}>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <motion.span
              className="reveal-text"
              key={index}
              ref={setlettersRef}
              animate={controls}
              initial={{ color: "transparent" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TextReveal;
