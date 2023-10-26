import React, { useState } from 'react';

import Button from '../../Button';
import Overlay from '../../Overlay';
import { AnchorType } from '../../Overlay/Overlay';

const OverlayShowcase: React.FCC<{ anchor: AnchorType; size: string; hasPlayground?: boolean }> = ({
  anchor,
  size,
  hasPlayground,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonLabel = hasPlayground ? 'Open Overlay' : anchor;

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>{buttonLabel}</Button>
      <Overlay
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        size={size}
        anchor={anchor}
      >
        <div style={{ display: 'flex', backgroundColor: '#F3F5F8' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat. Leo a diam
          sollicitudin tempor id eu. At tempor commodo ullamcorper a lacus vestibulum sed arcu.
          Auctor neque vitae tempus quam. Pharetra et ultrices neque ornare aenean. Pulvinar mattis
          nunc sed blandit libero volutpat sed. Bibendum at varius vel pharetra vel turpis nunc
          eget. Pulvinar sapien et ligula ullamcorper malesuada proin. Sagittis nisl rhoncus mattis
          rhoncus urna neque viverra justo. Lorem ipsum dolor sit amet. Fames ac turpis egestas sed
          tempus urna. Scelerisque felis imperdiet proin fermentum. Sed vulputate odio ut enim
          blandit volutpat maecenas. Velit egestas dui id ornare arcu odio. Augue ut lectus arcu
          bibendum. Vestibulum lorem sed risus ultricies. Lobortis feugiat vivamus at augue.
          Sagittis id consectetur purus ut faucibus pulvinar. Amet mauris commodo quis imperdiet
          massa tincidunt nunc. Sit amet massa vitae tortor condimentum. Dignissim enim sit amet
          venenatis urna cursus eget. Cras pulvinar mattis nunc sed blandit libero. Eu volutpat odio
          facilisis mauris sit amet massa. Lacus suspendisse faucibus interdum posuere lorem ipsum
          dolor sit amet. Nunc id cursus metus aliquam eleifend mi in nulla. Sit amet purus gravida
          quis. Urna neque viverra justo nec ultrices dui sapien eget mi. Eleifend donec pretium
          vulputate sapien nec sagittis aliquam malesuada bibendum. Tellus molestie nunc non blandit
          massa enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nec dui nunc
          mattis enim ut tellus elementum sagittis. Cras semper auctor neque vitae tempus quam. Sit
          amet venenatis urna cursus eget nunc. Sagittis aliquam malesuada bibendum arcu vitae
          elementum curabitur vitae nunc. Tellus orci ac auctor augue mauris augue neque gravida.
          Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Praesent tristique
          magna sit amet purus. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Ipsum dolor
          sit amet consectetur adipiscing elit pellentesque. Commodo sed egestas egestas fringilla
          phasellus faucibus scelerisque. Ornare suspendisse sed nisi lacus sed viverra tellus in
          hac. Leo a diam sollicitudin tempor id eu nisl nunc mi. Sit amet tellus cras adipiscing
          enim eu turpis. Ullamcorper sit amet risus nullam eget felis eget. Consectetur lorem donec
          massa sapien faucibus et molestie ac feugiat. Scelerisque felis imperdiet proin fermentum
          leo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Arcu risus
          quis varius quam quisque id diam vel quam. Eget nullam non nisi est sit amet facilisis
          magna etiam. Gravida in fermentum et sollicitudin. Amet volutpat consequat mauris nunc
          congue. Cum sociis natoque penatibus et magnis dis parturient. Dictum fusce ut placerat
          orci nulla pellentesque. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.
          Mauris cursus mattis molestie a. Sed lectus vestibulum mattis ullamcorper velit sed. Morbi
          tempus iaculis urna id volutpat.
        </div>
      </Overlay>
    </div>
  );
};

export default OverlayShowcase;
