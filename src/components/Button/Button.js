import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
  const { block, className, size, squared, variant, ...rest } = props;

  const classes = classNames(
    className,
    'btn',
    `btn-${variant}`,
    size && `btn-${size}`,
    squared && 'btn-squared',
    block && 'btn-block'
  );

  if (props.href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...rest} className={classes} />;
  }

  return <button {...rest} className={classes} />;
}

Button.propTypes = {
  block: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  squared: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'light',
    'outline-primary',
    'outline-secondary',
    'outline-light',
  ]),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
