import { NavigationMenuItem } from '../components/Navigation/types';
declare const useLocationToGetCurrentMenuItem: (menuItems: NavigationMenuItem[], setOpenMenuItems: React.Dispatch<React.SetStateAction<string[]>>) => [string | undefined];
export default useLocationToGetCurrentMenuItem;
