import * as React from 'react';

const getSize = () => {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
      };
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({});

    const handleResize = () => {
        setWindowSize(getSize());
    }

    React.useEffect(()=>{
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, [])
    return windowSize
}

export default useWindowSize;