import React, { ReactNode } from "react";
import { Transition } from "react-transition-group";

interface IProps {
  children: React.ReactNode;
  duration?: number;
}

const Fade = ({ children, duration = 1000 }: IProps) => {
  const [inProp, setInProp] = React.useState(false);
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [key: string]: any } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  React.useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
