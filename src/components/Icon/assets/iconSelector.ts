import { AcceptedIconNames } from '../types';

import { ReactComponent as ActionsIcon } from './actions.svg';
import { ReactComponent as AddIcon } from './add.svg';
import { ReactComponent as AlertIcon } from './alert.svg';
import { ReactComponent as AncientIcon } from './ancient-building.svg';
import { ReactComponent as ArrowLeftIcon } from './arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from './arrow-right.svg';
import { ReactComponent as ArtistIcon } from './artist.svg';
import { ReactComponent as AssetMatchingIcon } from './asset-matching.svg';
import { ReactComponent as AssetIcon } from './asset.svg';
import { ReactComponent as AutoIcon } from './auto.svg';
import { ReactComponent as CalendarEmptyIcon } from './calendar-empty.svg';
import { ReactComponent as CatalogOverviewIcon } from './catalog-overview.svg';
import { ReactComponent as CatalogIcon } from './catalog.svg';
import { ReactComponent as CheckIcon } from './check.svg';
import { ReactComponent as CheckedListIcon } from './checked-list.svg';
import { ReactComponent as CheckmarkIcon } from './checkmark.svg';
import { ReactComponent as ChevronExtraSmallDownIcon } from './chevron-extra-small-down.svg';
import { ReactComponent as ChevronExtraSmallLeftIcon } from './chevron-extra-small-left.svg';
import { ReactComponent as ChevronExtraSmallRightIcon } from './chevron-extra-small-right.svg';
import { ReactComponent as ChevronExtraSmallUpIcon } from './chevron-extra-small-up.svg';
import { ReactComponent as ChevronLargeDownIcon } from './chevron-large-down.svg';
import { ReactComponent as ChevronLargeLeftIcon } from './chevron-large-left.svg';
import { ReactComponent as ChevronLargeRightIcon } from './chevron-large-right.svg';
import { ReactComponent as ChevronLargeUpIcon } from './chevron-large-up.svg';
import { ReactComponent as ChevronSmallDownIcon } from './chevron-small-down.svg';
import { ReactComponent as ChevronSmallLeftIcon } from './chevron-small-left.svg';
import { ReactComponent as ChevronSmallRightIcon } from './chevron-small-right.svg';
import { ReactComponent as ChevronSmallUpIcon } from './chevron-small-up.svg';
import { ReactComponent as CloseTagIcon } from './close-tag.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import { ReactComponent as CmsProcessIcon } from './cms-process.svg';
import { ReactComponent as CompositionIcon } from './composition.svg';
import { ReactComponent as ConflictsIcon } from './conflicts.svg';
import { ReactComponent as DatasetIcon } from './dataset.svg';
import { ReactComponent as ArrowDownIcon } from './dd-arrow.svg';
import { ReactComponent as DeliveryIcon } from './delivery.svg';
import { ReactComponent as DetailsIcon } from './details.svg';
import { ReactComponent as DotsVerticalIcon } from './dots-vertical.svg';
import { ReactComponent as DownloadIcon } from './download.svg';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as ExpensesIcon } from './expenses.svg';
/**
 * In the current design system the collection of "FatArrowIcon"
 * has been renamed into "ArrowIcon" collection. For backwards
 * compatibility reasons, the naming of the previous version has been
 * preserved and the icons have been updated with the current code.
 */
import { ReactComponent as FatArrowDownIcon } from './fat-arrow-down.svg';
import { ReactComponent as FatArrowLeftIcon } from './fat-arrow-left.svg';
import { ReactComponent as FatArrowRightIcon } from './fat-arrow-right.svg';
import { ReactComponent as FatArrowUpIcon } from './fat-arrow-up.svg';
import { ReactComponent as FinancialChartIcon } from './financial-chart.svg';
import { ReactComponent as GenericFileIcon } from './generic-file.svg';
import { ReactComponent as GlobalItemIcon } from './global-item.svg';
import { ReactComponent as HourglassIcon } from './hourglass.svg';
import { ReactComponent as IncomeIcon } from './income.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as KeywordIcon } from './keyword.svg';
import { ReactComponent as LinkedIcon } from './linked.svg';
import { ReactComponent as LockIcon } from './lock.svg';
import { ReactComponent as ManualIcon } from './manual.svg';
import { ReactComponent as MenuIcon } from './menu.svg';
// MinusIcon code has been updated } from current design system
import { ReactComponent as MinusIcon } from './minus.svg';
import { ReactComponent as MoreOptionsHorizontalIcon } from './more-options-horizontal.svg';
import { ReactComponent as MoreOptionsVerticalIcon } from './more-options-vertical.svg';
import { ReactComponent as MusicNoteIcon } from './music-note.svg';
import { ReactComponent as OthersIcon } from './others.svg';
import { ReactComponent as OwnershipValidationIcon } from './ownership-validation.svg';
import { ReactComponent as PageFirstIcon } from './page-first.svg';
import { ReactComponent as PageLastIcon } from './page-last.svg';
import { ReactComponent as ArrowToRightIcon } from './pagination-end.svg';
import { ReactComponent as ArrowToLeftIcon } from './pagination-start.svg';
import { ReactComponent as PercentageIcon } from './percentage.svg';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as PoliciesIcon } from './policies.svg';
import { ReactComponent as ProcessManagementIcon } from './process-management.svg';
import { ReactComponent as ProcessIcon } from './process.svg';
import { ReactComponent as PublisherIcon } from './publisher.svg';
import { ReactComponent as RecordLabelIcon } from './record-label.svg';
import { ReactComponent as ReferenceFileIcon } from './reference-file.svg';
import { ReactComponent as RestoreIcon } from './restore.svg';
import { ReactComponent as ResultIcon } from './result.svg';
import { ReactComponent as SearchMusicIcon } from './search-music.svg';
import { ReactComponent as SearchThunderIcon } from './search-thunder.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as SightIcon } from './sight.svg';
import { ReactComponent as StampIcon } from './stamp.svg';
import { ReactComponent as SuccessIcon } from './success.svg';
import { ReactComponent as ThunderIcon } from './thunder.svg';
import { ReactComponent as TicTacToeArrowIcon } from './tic-tac-toe-arrow.svg';
import { ReactComponent as TimeOutIcon } from './time-out.svg';
import { ReactComponent as TrainingIcon } from './training.svg';
import { ReactComponent as TrophyIcon } from './trophy.svg';
import { ReactComponent as UpdateIcon } from './update.svg';
import { ReactComponent as UploadIcon } from './upload.svg';
import { ReactComponent as UserAvatarIcon } from './user-avatar.svg';
import { ReactComponent as UserIcon } from './user.svg';
import { ReactComponent as WriterIcon } from './writer.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';

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
