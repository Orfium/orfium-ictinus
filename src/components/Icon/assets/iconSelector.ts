import { AcceptedIconNames } from '../types';

import AddIcon from './add.svg';
import AncientIcon from './ancient-building.svg';
import ArrowDownIcon from './dd-arrow.svg';
import ArrowLeftIcon from './arrow-left.svg';
import ArrowRightIcon from './arrow-right.svg';
import ArrowToLeftIcon from './pagination-start.svg';
import ArrowToRightIcon from './pagination-end.svg';
import CalendarEmptyIcon from './calendar-empty.svg';
import CheckIcon from './check.svg';
import CheckedListIcon from './checked-list.svg';
import DotsVerticalIcon from './dots-vertical.svg';
import ExpensesIcon from './expenses.svg';
import FatArrowDownIcon from './fat-arrow-down.svg';
import FatArrowLeftIcon from './fat-arrow-left.svg';
import FatArrowRightIcon from './fat-arrow-right.svg';
import FinancialChartIcon from './financial-chart.svg';
import GlobalItemIcon from './global-item.svg';
import HourglassIcon from './hourglass.svg';
import IncomeIcon from './income.svg';
import KeywordIcon from './keyword.svg';
import LinkedIcon from './linked.svg';
import MinusIcon from './minus.svg';
import MusicNoteIcon from './music-note.svg';
import PercentageIcon from './percentage.svg';
import RestoreIcon from './restore.svg';
import SearchMusicIcon from './search-music.svg';
import SearchThunderIcon from './search-thunder.svg';
import StampIcon from './stamp.svg';
import ThunderIcon from './thunder.svg';
import TicTacToeArrowIcon from './tic-tac-toe-arrow.svg';
import TimeOutIcon from './time-out.svg';
import TrainingIcon from './training.svg';
import TrophyIcon from './trophy.svg';
import UserIcon from './user.svg';
import YoutubeIcon from './youtube.svg';

const iconSelector: { [key in AcceptedIconNames]: string } = {
  add: AddIcon,
  ancient: AncientIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowToLeft: ArrowToLeftIcon,
  arrowToRight: ArrowToRightIcon,
  calendarEmpty: CalendarEmptyIcon,
  check: CheckIcon,
  checkedList: CheckedListIcon,
  dotsVertical: DotsVerticalIcon,
  expenses: ExpensesIcon,
  fatArrowDown: FatArrowDownIcon,
  fatArrowLeft: FatArrowLeftIcon,
  fatArrowRight: FatArrowRightIcon,
  financialChart: FinancialChartIcon,
  globalItem: GlobalItemIcon,
  hourglass: HourglassIcon,
  income: IncomeIcon,
  keyword: KeywordIcon,
  linked: LinkedIcon,
  minus: MinusIcon,
  musicNote: MusicNoteIcon,
  percentage: PercentageIcon,
  restore: RestoreIcon,
  searchMusic: SearchMusicIcon,
  searchThunder: SearchThunderIcon,
  stamp: StampIcon,
  thunder: ThunderIcon,
  ticTacToeArrow: TicTacToeArrowIcon,
  timeOut: TimeOutIcon,
  training: TrainingIcon,
  trophy: TrophyIcon,
  user: UserIcon,
  youtube: YoutubeIcon,
};

export default iconSelector;
