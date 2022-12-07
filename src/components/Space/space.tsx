import React from 'react';
import classNames from 'classnames';
import { toArray } from 'utils/toArray';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  size?: SizeType | number;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  onClick?: () => void;
}

/**
 * Uikit Space Component. <br/>
 * Set components spacing, avoid components clinging together and set a unified space.
 */
const Space: React.FC<SpaceProps> = (props) => {
  const {
    className = '',
    direction,
    size,
    align,
    children,
    style,
    onClick,
  } = props;
  const wrapClasses = classNames({
    [`space-${direction}`]: direction,
    [`space-${size}`]: typeof size === 'string' && size,
    [`space-${align}`]: direction === 'horizontal' && align,
  });
  const styles: React.CSSProperties = { ...style };
  if (typeof size === 'number') {
    direction === 'vertical'
      ? (styles.marginTop = `${size}px`)
      : (styles.marginLeft = `${size}px`);
  }
  return (
    <div
      className={`${wrapClasses} ${className}`}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {toArray(children).map((child, i) => (
        <div style={{ ...styles }} key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};
Space.defaultProps = {
  direction: 'horizontal',
  size: 'middle',
  align: 'center',
};
export default Space;
