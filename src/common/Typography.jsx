import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Typography = ({ children, tag, variant, customClasses }) => {
  const Component = tag || 'p';

  const className = clsx({
    'text-dark-primary': variant === 'dark-primary',
    'text-primary': variant === 'primary',
    'text-light-grey': variant === 'light-grey',
    'text-white': variant === 'white',
    'text-4xl': tag === 'h1',
    'text-3xl': tag === 'h2',
    'text-2xl': tag === 'h3',
    'text-xl': tag === 'h4',
    'text-lg': tag === 'h5',
    'text-base': tag === 'h6',
    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};


Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  variant: PropTypes.string,
  customClasses: PropTypes.string,
};


Typography.defaultProps = {
  tag: 'p',
  variant: 'body',
  customClasses: '',
};

export default Typography;
