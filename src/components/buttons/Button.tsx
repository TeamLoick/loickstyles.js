import React, { ReactElement, Children, CSSProperties } from "react";

export interface ButtonProps {
  children: ReactElement;
  activeClass?: string;
  activeStyle?: CSSProperties;
}

const Button = ({
  children,
  activeClass,
  activeStyle,
  ...props
}: ButtonProps) => {
  const child = Children.only(children);

  return (
    <button {...props}>
      {React.cloneElement(child, {
        class: activeClass || null,
        style: activeStyle || null,
      })}
    </button>
  );
};

export default Button;
