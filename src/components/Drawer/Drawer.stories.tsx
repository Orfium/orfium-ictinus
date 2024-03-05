import { useState } from 'react';
import { FIGMA_URL } from '../../utils/common';
import Drawer, { DrawerHeader, DrawerContent, DrawerFooter } from './index';
import Button from 'components/Button';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import BarChartShowCase from 'components/storyUtils/BarChartShowCase';
import Icon from 'components/Icon';
import { fireEvent, within } from '@storybook/testing-library';

export default {
  title: 'Updated Components/Drawer/Drawer',
  component: Drawer,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Drawer',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
    chromatic: { delay: 400 },
  },
};

const drawerContent = {
  header: <Typography variant="headline05">Here's some interesting text for you</Typography>,
  content: (
    <Typography>
      Journeying Kingdom pardon. Surround sat lost Smeagol's everyone rights. Today is my 111th
      birthday! Stirring are Homely sweet athletic breeze throws older keeping! Cheese King's echoes
      they. Reference fiery day bother sight fighters Dwarves fond tinkers! Escort defending stealth
      come gift approaches Thrain cost! Shattered eaves Havens afford coins blessed fresh fond
      survive. Spilled captain Morgoth. Probably pits enchanting breathe returned wolf's staying
      Wood-elves. It must be taken deep into Mordor and cast back into the fiery chasm from whence
      it came. Racket branch lowest regrouping Longshanks disappeared. Fountains Isen when face
      can't six? Tender veiling goodness Silvan travelers withdraw shrink shall tad manage same
      bandy. Meriadoc wife anything feels earth. God ginger tomato's alliances industry travelers?
      Possessed grandfather might Théoden's hunt waits scattered glory inside. Grog Balin allow
      sweeter. Thirst given stars Gimli summit levels statute dealing? Nab works Isildur's shows.
      Position peace Bain. Advance greedily showed track required left dealings any round
      magnificence Bagshot Row burns. Sell nowhere descend tongue whatever wood dreamed Shirkers
      touch glowers here? 14th suffer wreathed perceived warts corks sadness lived fighters s Front
      group! One does not simply walk into Mordor. Map Théodred's swamp first-born so. We'll pa
      echoes pointing sacrifice Pippin correctly gonna escape necks rip started? Destruction judged
      wander nice whom Luthien just ginger aiding amongst jewel western. Prosaic kindled barter Ori
      burned thanks generous. Drive Haradrim sponge fronts humble high storeroom! South Shadowfax
      board lifetime reproductions 1400 extraordinary contains farms dogs 400 seams. Assault hangs
      owe liked Took's streets gifted law wept. Have hithlain leathery pace pointy Bifur precisely.
      Shines cozy coat standing overflowing maid Théoden's overfond deeply. That is no trinket you
      carry. Andûril ambushed deadly. Again decisions traitors Bagshot Row liar cursed spreads abyss
      dreamt. Arkenstone eaten balanced gold unleash rat taking. Crumbles Goblin-town lthilien
      herald. Disguised barge halfling inferno Uruk-hai blunt show riddle! Alive worthy Greenway
      111th swung expecting. Age weasel J.R.R. Tolkien utter grip petty shelter fouler bits learn.
      You shall not pass! Precedes gaining Lobelia Sackville-Baggins. Throw since what'll gaining
      earth keys weight Ettenmoors twitching itself. Scout officially made winter's bestowing threw
      attention Greyhame drown. Able-bodied pocketses examine finest every taught injuries uh Lindir
      fashioning fast knocks? Someone unfought tree mission six Arod wise still it beyond undimmed
      capable. Curtain poisonous elevenses Noldorin swept closer few warmongering. There is one
      Dwarf yet in Moria who still draws breath. Wandered looking cooked Lindir tender trust
      smuggler. Bars sad alas attached power unwise cloaked child Midsummer's Eve suspicious noise?
      Bank lurking folk Ettenmoors lasts urged gonna use? Cair sawing hoot civil travel halt cause
      wrath nothing today few clearly.
    </Typography>
  ),
  footer: (
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="headline01">The End</Typography>
    </div>
  ),
};

const drawerFormContent = {
  header: (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography>Create Entity Form</Typography>
      <Typography type="secondary">Short copy providing context</Typography>
    </div>
  ),
  content: (
    <div
      css={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        height: '1200px',
      }}
    >
      <TextField label="Field 1" />
      <TextField label="Field 2" />
      <TextField label="Field 3" />
    </div>
  ),
  footer: (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <div css={{ display: 'flex', gap: '8px' }}>
        <Button type="tertiary">Cancel</Button>
        <Button>Create Entity</Button>
      </div>
    </div>
  ),
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
            anchor={'right'}
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
            anchor={'right'}
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
            anchor={'right'}
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
            anchor={'right'}
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
        </div>
      </div>
    );
  },
  name: 'Sizes',
  autoPlay: true,
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('button');

    fireEvent.click(buttons[0]);
  },
  parameters: {
    controls: { disable: true },
  },
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
            anchor="top"
            size={33}
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
        </div>
      </div>
    );
  },
  name: 'Placement',
  parameters: {
    controls: { disable: true },
  },
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
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
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
          >
            <DrawerHeader>{drawerContent.header}</DrawerHeader>
            <DrawerContent>{drawerContent.content}</DrawerContent>
            <DrawerFooter>{drawerContent.footer}</DrawerFooter>
          </Drawer>
        </div>
        <div css={{ display: 'flex', gap: '48px', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>Copy Paste this Text</Typography>
          <Button>Click this Button</Button>
        </div>
      </div>
    );
  },
  name: 'Background',
  parameters: {
    controls: { disable: true },
  },
};

export const FixedContent = {
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
            Fixed Layout
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            size={33}
            anchor={'right'}
            hasFixedLayout
          >
            <DrawerHeader>{drawerFormContent.header}</DrawerHeader>
            <DrawerContent>{drawerFormContent.content}</DrawerContent>
            <DrawerFooter>{drawerFormContent.footer}</DrawerFooter>
          </Drawer>
        </div>
      </div>
    );
  },
  name: 'Fixed content',
  autoPlay: true,
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByTestId('button');

    fireEvent.click(buttons[0]);
  },
  parameters: {
    controls: { disable: true },
  },
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
            anchor={'right'}
          >
            <DrawerHeader>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>Aug 2023</Typography>
              </div>
            </DrawerHeader>
            <DrawerContent>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '48px',
                  justifyContent: 'center',
                }}
              >
                <BarChartShowCase width="100%" />
                <Typography>
                  Hi! I’m copy. I provide additional context, but I’m not super vital. You could
                  probably still understand the whole dashboard without reading me; I’m just the
                  cherry on the top of the visualization cake.
                </Typography>
              </div>
            </DrawerContent>
          </Drawer>
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
            anchor={'right'}
          >
            <DrawerContent>
              <div>
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
                      <Typography>These are the details for the option {selectedOption}</Typography>
                    </div>
                  </div>
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    );
  },
  name: 'More Examples',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isBackgroundActive, size, anchor, hasFixedLayout } = args;

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
            isBackgroundActive={isBackgroundActive}
            onClose={() => {
              setIsOpen(false);
            }}
            size={size}
            anchor={anchor}
            hasFixedLayout={hasFixedLayout}
          >
            <DrawerHeader>{drawerFormContent.header}</DrawerHeader>
            <DrawerContent>{drawerFormContent.content}</DrawerContent>
            <DrawerFooter>{drawerFormContent.footer}</DrawerFooter>
          </Drawer>
        </div>
      </div>
    );
  },
  name: 'Playground',

  parameters: {
    controls: { include: ['isBackgroundActive', 'size', 'anchor', 'hasFixedLayout'] },
  },
};
