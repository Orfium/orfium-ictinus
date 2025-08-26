import { AudioControlsIcons, BasicActionsIcons, DataAndFinanceIcons, GenericIcons, MusicBusinessIcons, NavigationIcons, ToggledActionsIcons, UserAndStatusIcons } from './Icon.types';
type IconSet = {
    userAndStatus: {
        title: string;
        icons: UserAndStatusIcons[];
    };
    dataAndFinance: {
        title: string;
        icons: DataAndFinanceIcons[];
    };
    navigation: {
        title: string;
        icons: NavigationIcons[];
    };
    generic: {
        title: string;
        icons: GenericIcons[];
    };
    basicActions: {
        title: string;
        icons: BasicActionsIcons[];
    };
    toggledActions: {
        title: string;
        icons: ToggledActionsIcons[];
    };
    audioControls: {
        title: string;
        icons: AudioControlsIcons[];
    };
    musicBusiness: {
        title: string;
        icons: MusicBusinessIcons[];
    };
};
export declare const iconsSet: IconSet;
export {};
