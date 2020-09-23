import React from 'react'
import styles from './Button.module.css';

interface IProps {
  onClick?: () => void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  children?: string;
  className: string;
}

const Button = (props: IProps) => {
  const { 
    onClick,
    disabled,
    type,
    children,
    className,
   } = props;

   const handleOnClick = () => {
     if(onClick) {
       onClick();
     }
   }

   return (
     <div>
       <button
        disabled={disabled}
        type={type}
        onClick={handleOnClick}
        className={`${styles.button} ${styles[className]}`}
        >
          {children}
        </button>

     </div>
   )
}

export default Button;