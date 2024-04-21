import { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

const RevealText = ({ text, classes }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const spanElements = scope.current.querySelectorAll(".reveal-text");
      spanElements.forEach((span) => {
        animate(span, { opacity: 1 }, { duration: 1 });
      });
    }
  }, [animate, isInView, scope]);

  return (
    <>
      <div className={`reveal ${classes}`}>
        <div ref={scope}>
          {text.split("").map((letter, index) => (
            <motion.span className="reveal-text" key={index}>
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};

export default RevealText;
