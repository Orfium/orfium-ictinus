import type {
  AudioControlsIcons,
  BasicActionsIcons,
  DataAndFinanceIcons,
  GenericIcons,
  MusicBusinessIcons,
  NavigationIcons,
  ToggledActionsIcons,
  UserAndStatusIcons,
} from './Icon.types';

type IconSet = {
  userAndStatus: { title: string; icons: UserAndStatusIcons[] };
  dataAndFinance: { title: string; icons: DataAndFinanceIcons[] };
  navigation: { title: string; icons: NavigationIcons[] };
  generic: { title: string; icons: GenericIcons[] };
  basicActions: { title: string; icons: BasicActionsIcons[] };
  toggledActions: { title: string; icons: ToggledActionsIcons[] };
  audioControls: { title: string; icons: AudioControlsIcons[] };
  musicBusiness: { title: string; icons: MusicBusinessIcons[] };
};

export const iconsSet: IconSet = {
  userAndStatus: {
    title: 'User & Status',
    icons: [
      'account',
      'user',
      'users',
      'role',
      'entities',
      'organization',
      'success',
      'informational',
      'warning',
      'error',
      'verified',
      'unverified',
      'pending',
      'help',
      'statusIndicator',
    ],
  },
  dataAndFinance: {
    title: 'Data & Finance',
    icons: [
      'dashboard',
      'analytics',
      'dataset',
      'insight',
      'trendingUp',
      'trendingDown',
      'income',
      'earnings',
      'invoice',
    ],
  },
  navigation: {
    title: 'Navigation',
    icons: [
      'menu',
      'apps',
      'arrowDown',
      'arrowRight',
      'arrowLeft',
      'arrowUp',
      'chevronDown',
      'chevronRight',
      'chevronLeft',
      'chevronUp',
      'triangleDown',
      'triangleRight',
      'triangleLeft',
      'triangleUp',
      'pageFirst',
      'pageLast',
    ],
  },
  generic: {
    title: 'Generic',
    icons: [
      'chat',
      'mail',
      'externalLink',
      'moreOptions',
      'filter',
      'settings',
      'location',
      'calendar',
      'notification',
      'manual',
      'language',
      'delivery',
      'file',
      'issue',
      'keyword',
      'policy',
      'legal',
      'report',
      'searchFilled',
      'tag',
    ],
  },
  basicActions: {
    title: 'Basic Actions',
    icons: [
      'edit',
      'search',
      'upload',
      'download',
      'plus',
      'minus',
      'close',
      'check',
      'login',
      'logout',
      'thumbsUp',
      'thumbsDown',
      'copy',
      'delete',
      'mediaFile',
      'review',
      'refresh',
      'restore',
      'update',
      'convert',
      'undo',
      'redo',
      'sort',
      'columnChooser',
      'sortDescending',
      'sortAscending',
      'share',
    ],
  },
  toggledActions: {
    title: 'Toggled Actions',
    icons: [
      'favorite',
      'favoriteOff',
      'bookmark',
      'bookmarkOff',
      'flag',
      'flagOff',
      'eye',
      'eyeOff',
      'lock',
      'unlock',
      'link',
      'unlink',
      'pair',
      'unpair',
      'freeze',
      'unfreeze',
      'image',
      'imageOff',
      'video',
      'videoOff',
      'audio',
      'audioOff',
    ],
  },
  audioControls: {
    title: 'Audio Controls',
    icons: ['play', 'pause', 'resume', 'stop', 'forward', 'rewind', 'next', 'previous'],
  },
  musicBusiness: {
    title: 'Music Business',
    icons: [
      'asset',
      'composition',
      'recording',
      'work',
      'writer',
      'publisher',
      'artist',
      'recordLabel',
      'album',
      'license',
      'catalog',
      'usage',
      'distribution',
      'conflict',
      'claim',
      'radio',
      'broadcast',
      'television',
      'playcount',
      'concert',
      'channel',
      'youTube',
      'cinema',
      'publicPerformance',
      'cueSheet',
      'digital',
    ],
  },
};
