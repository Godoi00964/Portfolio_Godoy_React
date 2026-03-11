import React from 'react';
import './css/Button.css';

const Button = ({ children, type = 'btn-1', href, onClick, className = '', target, rel, isSubmit, value }) => {
  const classNames = `${type} ${className}`.trim();

  if (isSubmit) {
    return (
      <input type="submit" value={value || children} className={classNames} onClick={onClick} />
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
