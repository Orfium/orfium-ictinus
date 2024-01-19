import { Dispatch, SetStateAction, useState } from 'react';
import { FIGMA_URL } from '../../utils/common';
import Drawer from './Drawer';
import Button from 'components/Button';
import Typography from 'components/Typography';
import { AnchorType } from './Drawer.types';
import NumberField from 'components/NumberField';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';

export default {
  title: 'Updated Components/Drawer',
  component: Drawer,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Drawer',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
    chromatic: { diffThreshold: 0.3 },
  },
};

const drawerContent = {
  header: {
    content: (
      <div css={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
        <Typography>Create Entity Form</Typography>
        <Typography type="secondary">Short copy providing context</Typography>
      </div>
    ),
    // isSticky: true,
  },
  body: {
    content: (
      <div css={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
        <TextField label="Field 1" />
        <TextField label="Field 2" />
        <TextField label="Field 3" />
      </div>
    ),
  },
  footer: {
    content: (
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: '24px',
        }}
      >
        <div css={{ display: 'flex', gap: '8px' }}>
          <Button type="tertiary">Cancel</Button>
          <Button>Create Entity</Button>
        </div>
      </div>
    ),
    // isSticky: true,
  },
};

export const Sizes = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const [isOpen3, setIsOpen3] = useState<boolean>(false);
    const [isOpen4, setIsOpen4] = useState<boolean>(false);

    return (
      <div css={{ width: '100%' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            33%
          </Button>
          <Drawer
            isOpen={isOpen1}
            onClose={() => {
              setIsOpen1(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            50%
          </Button>
          <Drawer
            isOpen={isOpen2}
            onClose={() => {
              setIsOpen2(false);
            }}
            size={50}
            anchor={'left'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen3(!isOpen3);
            }}
          >
            75%
          </Button>
          <Drawer
            isOpen={isOpen3}
            onClose={() => {
              setIsOpen3(false);
            }}
            size={75}
            anchor={'left'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen4(!isOpen4);
            }}
          >
            100%
          </Button>
          <Drawer
            isOpen={isOpen4}
            onClose={() => {
              setIsOpen4(false);
            }}
            size={100}
            anchor={'left'}
            content={drawerContent}
          />
        </div>
      </div>
    );
  },
  name: 'Sizes',
};

export const Placement = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const [isOpen3, setIsOpen3] = useState<boolean>(false);
    const [isOpen4, setIsOpen4] = useState<boolean>(false);

    return (
      <div css={{ width: '100%' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            Top
          </Button>
          <Drawer
            isOpen={isOpen1}
            onClose={() => {
              setIsOpen1(false);
            }}
            size={33}
            anchor={'top'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            Bottom
          </Button>
          <Drawer
            isOpen={isOpen2}
            onClose={() => {
              setIsOpen2(false);
            }}
            size={33}
            anchor={'bottom'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen3(!isOpen3);
            }}
          >
            Left
          </Button>
          <Drawer
            isOpen={isOpen3}
            onClose={() => {
              setIsOpen3(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen4(!isOpen4);
            }}
          >
            Right
          </Button>
          <Drawer
            isOpen={isOpen4}
            onClose={() => {
              setIsOpen4(false);
            }}
            size={33}
            anchor={'right'}
            content={drawerContent}
          />
        </div>
      </div>
    );
  },
  name: 'Placement',
};

export const Background = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);

    return (
      <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            Non-interactive Background
          </Button>
          <Drawer
            isOpen={isOpen1}
            onClose={() => {
              setIsOpen1(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent}
          />
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            Interactive Background
          </Button>
          <Drawer
            isBackgroundActive
            isOpen={isOpen2}
            onClose={() => {
              setIsOpen2(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent}
          />
        </div>
        <div css={{ display: 'flex', gap: '48px', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>Copy Paste this Text</Typography>
          <Button>Click this Button</Button>
        </div>
      </div>
    );
  },
  name: 'Background',
};

export const FixedContent = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);

    return (
      <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            Non-interactive Background
          </Button>
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            Interactive Background
          </Button>
        </div>
        <div css={{ display: 'flex', gap: '48px', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>Copy Paste this Text</Typography>
          <Button>Click this Button</Button>
        </div>
      </div>
    );
  },
  name: 'Fixed and custom content',
};
