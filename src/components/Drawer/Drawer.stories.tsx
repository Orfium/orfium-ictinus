import { boolean, number, select } from '@storybook/addon-knobs';
import { useState } from 'react';
import { FIGMA_URL } from '../../utils/common';
import Drawer from './Drawer';
import Button from 'components/Button';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import BarChartShowCase from 'components/storyUtils/BarChartShowCase';
import Icon from 'components/Icon';

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

const drawerContent = (hasFixedHeader = false, hasFixedFooter = false) => {
  const hasFixedHeaderOrFooter = hasFixedHeader || hasFixedFooter;

  return {
    header: {
      content: (
        <div css={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
          <Typography>Create Entity Form</Typography>
          <Typography type="secondary">Short copy providing context</Typography>
        </div>
      ),
      isFixed: hasFixedHeader,
    },
    body: {
      content: (
        <div
          css={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            flexWrap: 'wrap',
            height: hasFixedHeaderOrFooter ? '1200px' : 'auto',
          }}
        >
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
      isFixed: hasFixedFooter,
    },
  };
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
            content={drawerContent()}
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
    const [isOpen3, setIsOpen3] = useState<boolean>(false);

    return (
      <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            Fixed Header
          </Button>
          <Drawer
            isOpen={isOpen1}
            onClose={() => {
              setIsOpen1(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent(true, false)}
          />
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            Fixed Footer
          </Button>
          <Drawer
            isOpen={isOpen2}
            onClose={() => {
              setIsOpen2(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent(false, true)}
          />
          <Button
            onClick={() => {
              setIsOpen3(!isOpen3);
            }}
          >
            Fixed Header/Footer
          </Button>
          <Drawer
            isOpen={isOpen3}
            onClose={() => {
              setIsOpen3(false);
            }}
            size={33}
            anchor={'left'}
            content={drawerContent(true, true)}
          />
        </div>
      </div>
    );
  },
  name: 'Fixed content',
};

export const MoreExamples = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);

    const [selectedOption, setSelectedOption] = useState<number>(undefined);

    return (
      <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          >
            Visualization example
          </Button>
          <Drawer
            isOpen={isOpen1}
            onClose={() => {
              setIsOpen1(false);
            }}
            size={50}
            anchor={'left'}
            hasCloseButton={false}
            content={{
              header: {
                content: (
                  <div
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '24px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography>Aug 2023</Typography>
                    <Icon name="close" onClick={() => setIsOpen1(false)} />
                  </div>
                ),
              },
              body: {
                content: (
                  <div
                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '48px',
                      justifyContent: 'center',
                      padding: '24px',
                    }}
                  >
                    <BarChartShowCase width="100%" />
                    <Typography>
                      Hi! I’m copy. I provide additional context, but I’m not super vital. You could
                      probably still understand the whole dashboard without reading me; I’m just the
                      cherry on the top of the visualization cake.
                    </Typography>
                  </div>
                ),
              },
            }}
          />
          <Button
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          >
            Second level drawer with back button
          </Button>
          <Drawer
            isOpen={isOpen2}
            onClose={() => {
              setSelectedOption(undefined);
              setIsOpen2(false);
            }}
            size={50}
            anchor={'left'}
            content={{
              body: {
                content: (
                  <div css={{ padding: '24px' }}>
                    {!selectedOption && (
                      <div
                        css={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '72px',
                        }}
                      >
                        <div
                          css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography>Select one option for more details</Typography>
                          <Icon
                            name="close"
                            onClick={() => {
                              setSelectedOption(undefined);
                              setIsOpen2(false);
                            }}
                          />
                        </div>
                        <div
                          css={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid rgba(200, 206, 255, 0.7)',
                            borderRadius: '4px',
                            '&>div:hover': {
                              background: 'rgba(200, 206, 255, 0.3)',
                            },
                          }}
                        >
                          <div
                            css={{
                              cursor: 'pointer',
                              borderBottom: '1px solid rgba(200, 206, 255, 0.7)',
                              padding: '16px',
                            }}
                            onClick={() => setSelectedOption(1)}
                          >
                            <Typography>Option 1</Typography>
                          </div>
                          <div
                            css={{
                              cursor: 'pointer',
                              borderBottom: '1px solid rgba(200, 206, 255, 0.7)',
                              padding: '16px',
                            }}
                            onClick={() => setSelectedOption(2)}
                          >
                            <Typography>Option 2</Typography>
                          </div>
                          <div
                            css={{ cursor: 'pointer', padding: '16px' }}
                            onClick={() => setSelectedOption(3)}
                          >
                            <Typography>Option 3</Typography>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedOption && (
                      <div
                        css={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '72px',
                        }}
                      >
                        <div
                          css={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                          }}
                        >
                          <Icon name="arrowLeft" onClick={() => setSelectedOption(undefined)} />
                          <Typography>Option {selectedOption}</Typography>
                        </div>
                        <div css={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                          <Typography>
                            These are the details for the option {selectedOption}
                          </Typography>
                        </div>
                      </div>
                    )}
                  </div>
                ),
              },
            }}
          />
        </div>
      </div>
    );
  },
  name: 'More Examples',
};

export const Playground = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div css={{ display: 'flex', gap: '48px' }}>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Toggle Drawer
          </Button>
          <Drawer
            isOpen={isOpen}
            isBackgroundActive={boolean('isBackgroundActive', false)}
            onClose={() => {
              setIsOpen(false);
            }}
            size={number('size', 50)}
            anchor={select('anchor', ['top', 'right', 'bottom', 'left'], 'left')}
            hasCloseButton={boolean('hasCloseButton', false)}
            content={drawerContent(
              boolean('hasFixedHeader', false),
              boolean('hasFixedFooter', false)
            )}
          />
        </div>
      </div>
    );
  },
  name: 'Playground',
};
