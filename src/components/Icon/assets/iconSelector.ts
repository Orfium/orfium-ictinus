import { AcceptedIconNames } from '../types';

import ActionsIcon from './actions.svg';
import AddIcon from './add.svg';
import AncientIcon from './ancient-building.svg';
import ArrowDownIcon from './dd-arrow.svg';
import ArrowLeftIcon from './arrow-left.svg';
import ArrowRightIcon from './arrow-right.svg';
import ArrowToLeftIcon from './pagination-start.svg';
import ArrowToRightIcon from './pagination-end.svg';
import AssetMatchingIcon from './asset-matching.svg';
import AutoIcon from './auto.svg';
import CalendarEmptyIcon from './calendar-empty.svg';
import CatalogIcon from './catalog.svg';
import CatalogOverviewIcon from './catalog-overview.svg';
import CheckIcon from './check.svg';
import CheckedListIcon from './checked-list.svg';
import CmsProcessIcon from './cms-process.svg';
import CompositionIcon from './composition.svg';
import ConflictsIcon from './conflicts.svg';
import DeliveryIcon from './delivery.svg';
import DetailsIcon from './details.svg';
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
import ManualIcon from './manual.svg';
import MinusIcon from './minus.svg';
import MusicNoteIcon from './music-note.svg';
import OthersIcon from './others.svg';
import OwnershipValidationIcon from './ownership-validation.svg';
import PercentageIcon from './percentage.svg';
import PoliciesIcon from './policies.svg';
import ProcessManagementIcon from './process-management.svg';
import ReferenceFileIcon from './reference-file.svg';
import RestoreIcon from './restore.svg';
import ResultIcon from './result.svg';
import SearchMusicIcon from './search-music.svg';
import SearchThunderIcon from './search-thunder.svg';
import SightIcon from './sight.svg';
import StampIcon from './stamp.svg';
import ThunderIcon from './thunder.svg';
import TicTacToeArrowIcon from './tic-tac-toe-arrow.svg';
import TimeOutIcon from './time-out.svg';
import TrainingIcon from './training.svg';
import TrophyIcon from './trophy.svg';
import UserIcon from './user.svg';
import YoutubeIcon from './youtube.svg';

const iconSelector: { [key in AcceptedIconNames]: string } = {
  actions: ActionsIcon,
  add: AddIcon,
  ancient: AncientIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowToLeft: ArrowToLeftIcon,
  arrowToRight: ArrowToRightIcon,
  assetMatching: AssetMatchingIcon,
  auto: AutoIcon,
  calendarEmpty: CalendarEmptyIcon,
  catalog: CatalogIcon,
  catalogOverview: CatalogOverviewIcon,
  check: CheckIcon,
  checkedList: CheckedListIcon,
  cmsProcess: CmsProcessIcon,
  composition: CompositionIcon,
  conflicts: ConflictsIcon,
  delivery: DeliveryIcon, // "expenses" copy
  details: DetailsIcon,
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
  manual: ManualIcon,
  minus: MinusIcon,
  musicNote: MusicNoteIcon,
  others: OthersIcon,
  ownershipValidation: OwnershipValidationIcon,
  percentage: PercentageIcon,
  policies: PoliciesIcon,
  processManagement: ProcessManagementIcon, // "ticTacToeArrow" copy
  referenceFile: ReferenceFileIcon,
  restore: RestoreIcon,
  result: ResultIcon,
  searchMusic: SearchMusicIcon,
  searchThunder: SearchThunderIcon,
  sight: SightIcon,
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
