/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
// import { buttonSpanStyle, menuStyle } from './Menu.style';
// import useTheme from 'hooks/useTheme';
import { ToggleLayer } from 'react-laag';
import Button from '../Button';
// import Icon from '../Icon';
import { EventProps } from 'utils/common';
import MenuWrapper from './MenuWrapper';
import { MenuItem } from './index';

export type Props = {
  items: string[];
  selectedItem: string | null;
  onSelect: (option: string) => void;
  autoAdjust?: boolean;
  buttonText: string;
};

export type TestProps = {
  dataTestId?: string;
};

const Menu: React.FC<Props & TestProps & EventProps> = props => {
  const { items, onSelect, autoAdjust = true, buttonText = null } = props;
  // const theme = useTheme();

  return (
    <div style={{ position: 'relative' }}>
      <ToggleLayer
        renderLayer={props => {
          function handleClick(option: string) {
            onSelect(option);
            props.close();
          }

          return props.isOpen ? (
            // @ts-ignore
            <MenuWrapper
              ref={props.layerProps.ref}
              style={props.layerProps.style}
              arrowStyle={props.arrowStyle}
              layerSide={props.layerSide}
            >
              {items.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <MenuItem key={`${option}-${index}`} onClick={() => handleClick(option)}>
                  {option}
                </MenuItem>
              ))}
            </MenuWrapper>
          ) : null;
        }}
        closeOnOutsideClick
        closeOnDisappear="partial"
        placement={{
          anchor: 'BOTTOM_LEFT',
          autoAdjust,
          snapToAnchor: false,
          triggerOffset: 12,
          scrollOffset: 16,
          possibleAnchors: ['BOTTOM_CENTER', 'LEFT_CENTER', 'RIGHT_CENTER', 'TOP_CENTER'],
        }}
      >
        {({ triggerRef, toggle }) => (
          // @ts-ignore
          <Button ref={triggerRef} onClick={toggle}>
            {buttonText}
          </Button>
        )}
      </ToggleLayer>
    </div>
  );
};

export default Menu;
