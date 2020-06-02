/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { RenderLayerProps, LayerSide } from 'react-laag';

function getArrowTranslate(layerSide: LayerSide) {
  let x = '-50%';
  let y = '0';

  const OFFSET = 3.5;
  if (layerSide === 'left') {
    x = -OFFSET + 'px';
    y = '-50%';
  } else if (layerSide === 'right') {
    x = OFFSET + 'px';
    y = '-50%';
  }

  const rotation = {
    top: 180,
    right: -90,
    left: 90,
    bottom: 0,
  };

  return `translate(${x}, ${y}) rotate(${rotation[layerSide]}deg)`;
}

const Arrow = (props: any) => (
  <svg width={14} height={7} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#CDCFD0" d="M7 .07v1.428l-5.55 5.5L0 6.982zM7 .07v1.428l5.55 5.5L14 6.982z" />
      <path fill="#FFF" d="M1.45 7L7 1.498 12.55 7z" />
    </g>
  </svg>
);

const MenuWrapper = React.forwardRef<
  HTMLUListElement,
  RenderLayerProps & { className: string; style: object }
>(({ className, style, arrowStyle, layerSide, children }, ref) => {
  return (
    <ul
      ref={ref}
      className={className}
      style={style}
      css={css`
        transition: color 0.15s, background-color 0.15s, width 0.25s ease-in-out;
        position: absolute;
        width: 160px;
        padding: 4px 0px;
        list-style: none;
        background-clip: padding-box;
        border-radius: 4px;
        box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
        margin: 0;
        background-color: white;
        color: #333;
        border: 1px solid rgba(27, 31, 35, 0.15);
      `}
    >
      {children}

      <Arrow
        css={{
          ...arrowStyle,
          position: 'absolute',
          transformOrigin: 'center',
          transform: getArrowTranslate(layerSide),
        }}
      />
    </ul>
  );
});

export default MenuWrapper;
