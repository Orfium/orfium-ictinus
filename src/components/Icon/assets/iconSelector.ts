import { AcceptedIconNames } from '../types';

import ActionsIcon from './actions.svg';
import AddIcon from './add.svg';
import AlertIcon from './alert.svg';
import AncientIcon from './ancient-building.svg';
import ArrowDownIcon from './dd-arrow.svg';
import ArrowLeftIcon from './arrow-left.svg';
import ArrowRightIcon from './arrow-right.svg';
import ArrowToLeftIcon from './pagination-start.svg';
import ArrowToRightIcon from './pagination-end.svg';
import ArtistIcon from './artist.svg';
import AssetIcon from './asset.svg';
import AssetMatchingIcon from './asset-matching.svg';
import AutoIcon from './auto.svg';
import CalendarEmptyIcon from './calendar-empty.svg';
import CatalogIcon from './catalog.svg';
import CatalogOverviewIcon from './catalog-overview.svg';
import CheckIcon from './check.svg';
import CheckedListIcon from './checked-list.svg';
import CheckmarkIcon from './checkmark.svg';
import ChevronExtraSmallDownIcon from './chevron-extra-small-down.svg';
import ChevronExtraSmallLeftIcon from './chevron-extra-small-left.svg';
import ChevronExtraSmallRightIcon from './chevron-extra-small-right.svg';
import ChevronExtraSmallUpIcon from './chevron-extra-small-up.svg';
import ChevronLargeDownIcon from './chevron-large-down.svg';
import ChevronLargeLeftIcon from './chevron-large-left.svg';
import ChevronLargeRightIcon from './chevron-large-right.svg';
import ChevronLargeUpIcon from './chevron-large-up.svg';
import ChevronSmallDownIcon from './chevron-small-down.svg';
import ChevronSmallLeftIcon from './chevron-small-left.svg';
import ChevronSmallRightIcon from './chevron-small-right.svg';
import ChevronSmallUpIcon from './chevron-small-up.svg';
import CloseIcon from './close.svg';
import CloseTagIcon from './close-tag.svg';
import CmsProcessIcon from './cms-process.svg';
import CompositionIcon from './composition.svg';
import ConflictsIcon from './conflicts.svg';
import DatasetIcon from './dataset.svg';
import DeliveryIcon from './delivery.svg';
import DetailsIcon from './details.svg';
import DotsVerticalIcon from './dots-vertical.svg';
import DownloadIcon from './download.svg';
import ErrorIcon from './error.svg';
import ExpensesIcon from './expenses.svg';
/**
 * In the current design system the collection of "FatArrowIcon"
 * has been renamed into "ArrowIcon" collection. For backwards
 * compatibility reasons, the naming of the previous version has been
 * preserved and the icons have been updated with the current code.
 */
import FatArrowDownIcon from './fat-arrow-down.svg';
import FatArrowLeftIcon from './fat-arrow-left.svg';
import FatArrowRightIcon from './fat-arrow-right.svg';
import FatArrowUpIcon from './fat-arrow-up.svg';
import FinancialChartIcon from './financial-chart.svg';
import GenericFileIcon from './generic-file.svg';
import GlobalItemIcon from './global-item.svg';
import HourglassIcon from './hourglass.svg';
import IncomeIcon from './income.svg';
import InfoIcon from './info.svg';
import KeywordIcon from './keyword.svg';
import LinkedIcon from './linked.svg';
import LockIcon from './lock.svg';
import ManualIcon from './manual.svg';
import MenuIcon from './menu.svg';
// MinusIcon code has been updated from current design system
import MinusIcon from './minus.svg';
import MoreOptionsHorizontalIcon from './more-options-horizontal.svg';
import MoreOptionsVerticalIcon from './more-options-vertical.svg';
import MusicNoteIcon from './music-note.svg';
import OthersIcon from './others.svg';
import OwnershipValidationIcon from './ownership-validation.svg';
import PageFirstIcon from './page-first.svg';
import PageLastIcon from './page-last.svg';
import PercentageIcon from './percentage.svg';
import PlusIcon from './plus.svg';
import PoliciesIcon from './policies.svg';
import ProcessIcon from './process.svg';
import ProcessManagementIcon from './process-management.svg';
import PublisherIcon from './publisher.svg';
import RecordLabelIcon from './record-label.svg';
import ReferenceFileIcon from './reference-file.svg';
import RestoreIcon from './restore.svg';
import ResultIcon from './result.svg';
import SearchIcon from './search.svg';
import SearchMusicIcon from './search-music.svg';
import SearchThunderIcon from './search-thunder.svg';
import SightIcon from './sight.svg';
import StampIcon from './stamp.svg';
import SuccessIcon from './success.svg';
import ThunderIcon from './thunder.svg';
import TicTacToeArrowIcon from './tic-tac-toe-arrow.svg';
import TimeOutIcon from './time-out.svg';
import TrainingIcon from './training.svg';
import TrophyIcon from './trophy.svg';
import UpdateIcon from './update.svg';
import UploadIcon from './upload.svg';
import UserIcon from './user.svg';
import UserAvatarIcon from './user-avatar.svg';
import WriterIcon from './writer.svg';
import YoutubeIcon from './youtube.svg';

const iconSelector: { [key in AcceptedIconNames]: string } = {
  actions: ActionsIcon,
  add: AddIcon,
  alert: AlertIcon,
  ancient: AncientIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowToLeft: ArrowToLeftIcon,
  arrowToRight: ArrowToRightIcon,
  artist: ArtistIcon,
  asset: AssetIcon,
  assetMatching: AssetMatchingIcon,
  auto: AutoIcon,
  calendarEmpty: CalendarEmptyIcon,
  catalog: CatalogIcon,
  catalogOverview: CatalogOverviewIcon,
  check: CheckIcon,
  checkedList: CheckedListIcon,
  checkmark: CheckmarkIcon, // "check" copy (smaller)
  chevronExtraSmallDown: ChevronExtraSmallDownIcon, // "arrowDown" copy
  chevronExtraSmallLeft: ChevronExtraSmallLeftIcon, // "arrowLeft" copy
  chevronExtraSmallRight: ChevronExtraSmallRightIcon, // "arrowRight" copy
  chevronExtraSmallUp: ChevronExtraSmallUpIcon,
  chevronLargeDown: ChevronLargeDownIcon, // "arrowDown" copy (smaller)
  chevronLargeLeft: ChevronLargeLeftIcon, // "arrowLeft" copy (smaller)
  chevronLargeRight: ChevronLargeRightIcon, // "arrowRight" copy (smaller)
  chevronLargeUp: ChevronLargeUpIcon,
  chevronSmallDown: ChevronSmallDownIcon, // "arrowDown" copy (smaller)
  chevronSmallLeft: ChevronSmallLeftIcon, // "arrowLeft" copy (smaller)
  chevronSmallRight: ChevronSmallRightIcon, // "arrowRight" copy (smaller)
  chevronSmallUp: ChevronSmallUpIcon,
  close: CloseIcon,
  closeTag: CloseTagIcon,
  cmsProcess: CmsProcessIcon,
  composition: CompositionIcon,
  conflicts: ConflictsIcon,
  dataset: DatasetIcon,
  delivery: DeliveryIcon, // "expenses" copy
  details: DetailsIcon,
  dotsVertical: DotsVerticalIcon,
  download: DownloadIcon,
  error: ErrorIcon, // "closeTag" copy (larger)
  expenses: ExpensesIcon,
  fatArrowDown: FatArrowDownIcon,
  fatArrowLeft: FatArrowLeftIcon,
  fatArrowRight: FatArrowRightIcon,
  fatArrowUp: FatArrowUpIcon,
  financialChart: FinancialChartIcon,
  genericFile: GenericFileIcon,
  globalItem: GlobalItemIcon,
  hourglass: HourglassIcon,
  income: IncomeIcon,
  info: InfoIcon,
  keyword: KeywordIcon,
  linked: LinkedIcon,
  lock: LockIcon,
  manual: ManualIcon,
  menu: MenuIcon,
  minus: MinusIcon,
  moreOptionsHorizontal: MoreOptionsHorizontalIcon,
  moreOptionsVertical: MoreOptionsVerticalIcon, // "dotsVertical" copy (larger)
  musicNote: MusicNoteIcon,
  others: OthersIcon,
  ownershipValidation: OwnershipValidationIcon,
  pageFirst: PageFirstIcon, // "arrowToLeft" copy
  pageLast: PageLastIcon, // "arrowToRight" copy
  percentage: PercentageIcon,
  plus: PlusIcon,
  policies: PoliciesIcon,
  process: ProcessIcon,
  processManagement: ProcessManagementIcon, // "ticTacToeArrow" copy
  publisher: PublisherIcon,
  recordLabel: RecordLabelIcon,
  referenceFile: ReferenceFileIcon,
  restore: RestoreIcon,
  result: ResultIcon,
  search: SearchIcon,
  searchMusic: SearchMusicIcon,
  searchThunder: SearchThunderIcon,
  sight: SightIcon,
  stamp: StampIcon,
  success: SuccessIcon,
  thunder: ThunderIcon,
  ticTacToeArrow: TicTacToeArrowIcon,
  timeOut: TimeOutIcon,
  training: TrainingIcon,
  trophy: TrophyIcon,
  update: UpdateIcon,
  upload: UploadIcon,
  user: UserIcon,
  userAvatar: UserAvatarIcon, // "user" copy (smaller)
  writer: WriterIcon,
  youtube: YoutubeIcon,
};

export default iconSelector;
