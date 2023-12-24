

const LoadingWrapper = ({ complete, LodingComplete, children }) => {
    let animate = true;
    if (!LodingComplete && animate) {
      gsap.to(".loadingContainer", { opacity: 0, duration: 3, ease: "sine.out"})
      animate = false;
    }
    
    if (!complete) {
      return <div className="loadingContainer">{progress}%</div>;
    }

    return <>{children}</>;
  };
