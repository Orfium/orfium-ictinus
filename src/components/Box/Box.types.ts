import type { SpacingKey } from 'theme/globals/spacing';
import type globalColors from 'theme/tokens/semantic/variables/colors';
import type { DotKeys } from 'theme/tokens/utils';

export type Responsive<T> = T | Array<T>;

type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type AlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'inherit'
  | 'initial'
  | 'unset';
type Flex = number | string;
type Display =
  | 'block'
  | 'inline'
  | 'run-in'
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'block flow'
  | 'inline table'
  | 'flex run-in'
  | 'list-item'
  | 'list-item block'
  | 'list-item inline'
  | 'list-item flow'
  | 'list-item flow-root'
  | 'list-item block flow'
  | 'list-item block flow-root'
  | 'flow list-item block'
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
  | 'contents'
  | 'none'
  | 'inline-block'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'
  | 'inherit'
  | 'initial'
  | 'unset';
type GridAutoFlow =
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense'
  | 'inherit'
  | 'initial'
  | 'unset';
type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

type JustifyItems =
  /* Basic keywords */
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | 'inherit'
  | 'initial'
  | 'unset';

type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
type Overflow =
  | 'visible'
  | 'hidden'
  | 'scroll'
  | 'scrollX'
  | 'scrollY'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Scale = 0 | string;

export type WhiteSpace =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces'
  | 'inherit'
  | 'initial'
  | 'unset';

export type StyledBoxProps = {
  /** Accepts all themeable color properties. */
  color?: DotKeys<typeof globalColors.textColor>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment */
  backgroundAttachment?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip */
  backgroundClip?: string;
  /** Accepts all themeable color properties. */
  backgroundColor?: DotKeys<typeof globalColors.backgroundColor>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-image */
  backgroundImage?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin */
  backgroundOrigin?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position */
  backgroundPosition?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat */
  backgroundRepeat?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size */
  backgroundSize?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content */
  alignContent?: AlignContent;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items */
  alignItems?: AlignItems;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: AlignSelf;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  flexDirection?: FlexDirection;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/display */
  display?: Display;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
  flex?: Flex;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid */
  grid?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area */
  gridArea?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns */
  gridAutoColumns?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow */
  gridAutoFlow?: GridAutoFlow;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows */
  gridAutoRows?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column */
  gridColumn?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end */
  gridColumnEnd?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap */
  gridColumnGap?: Scale;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start */
  gridColumnStart?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap */
  gridGap?: Scale;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row */
  gridRow?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end */
  gridRowEnd?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap */
  gridRowGap?: Scale;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start */
  gridRowStart?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template */
  gridTemplate?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas */
  gridTemplateAreas?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns */
  gridTemplateColumns?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows */
  gridTemplateRows?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
  justifyContent?: JustifyContent;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items */
  justifyItems?: JustifyItems;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self */
  justifySelf?: JustifySelf;
  position?: Position;
  width?: Scale;
  minWidth?: Scale;
  maxWidth?: Scale;
  height?: Scale;
  minHeight?: Scale;
  maxHeight?: Scale;
  overflow?: Responsive<Overflow>;
  /** Acronym of margin definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/margin */
  m?: SpacingKey;
  /** Acronym of margin-top definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top */
  mt?: SpacingKey;
  /** Acronym of margin-right definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right */
  mr?: SpacingKey;
  /** Acronym of margin-bottom definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom */
  mb?: SpacingKey;
  /** Acronym of margin-bottom definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left */
  ml?: SpacingKey;
  /** Define horizontal margin  */
  mx?: SpacingKey;
  /** Define vertical margin  */
  my?: SpacingKey;
  /** Acronym of padding definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  p?: SpacingKey;
  /** Acronym of padding-top definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top */
  pt?: SpacingKey;
  /** Acronym of padding-right definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right */
  pr?: SpacingKey;
  /** Acronym of padding-bottom definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom */
  pb?: SpacingKey;
  /** Acronym of padding-left definition according to https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left */
  pl?: SpacingKey;
  /** Define horizontal padding  */
  px?: SpacingKey;
  /** Define vertical padding  */
  py?: SpacingKey;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content */
  placeContent?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items */
  placeItems?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self */
  placeSelf?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  left?: SpacingKey;
  top?: SpacingKey;
  right?: SpacingKey;
  bottom?: SpacingKey;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow */
  textOverflow?: string;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space */
  whiteSpace?: Responsive<WhiteSpace>;
};
