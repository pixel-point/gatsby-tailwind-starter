import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

// Example of the code — https://user-images.githubusercontent.com/20713191/144214886-2210d909-3c5e-480f-b181-44dd9fb1dc55.png
const styles = {
  // TODO: Add base styles if there are any. If not, then delete code on lines 7 and 25
  base: '',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {},
  // TODO: Add themes. Better to name the theme equally to the color that is being used. Using "black" color variable? Name it "black"!
  //       Check out an example by a link above for better understanding
  theme: {},
};

const Heading = ({
  className: additionalClassName,
  tag: Tag,
  size,
  theme,
  asHTML,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  if (asHTML) {
    return (
      <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} {...otherProps} />
    );
  }

  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
};

export default Heading;
