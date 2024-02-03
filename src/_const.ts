import { SheetColumnProperty } from './_type';

//# region 服事表
/** 表頭順序 */
export const cColumnOrder: SheetColumnProperty[] = [
  'date',
  'speaker',
  'facilitator',
  'communion',
  'pianist',
  'choir1',
  'choir2',
  'guitar',
  'bass',
  'drums',
  'slides',
  'soundControl',
  'liveStream',
  'youthLeaderMiddleGrade',
  'nurseryCoordinator',
  'nurseryAssistant',
  'greeter',
  'prayerMeeting',
  'potluck',
  'dishWashing',
  'specialDay',
];
/** 表頭顯示名稱 */
export const cSheetFieldDisplayName: Record<SheetColumnProperty, string> = {
  date: '日期',
  speaker: '講員',
  facilitator: '領會',
  communion: '擘餅',
  pianist: '司琴',
  choir1: '合音1',
  choir2: '合音2',
  guitar: '吉他',
  bass: '貝士',
  drums: '鼓',
  slides: '投影片',
  soundControl: '音控',
  liveStream: '直播',
  youthLeaderMiddleGrade: '兒主中年級',
  nurseryCoordinator: '幼兒主理',
  nurseryAssistant: '幼兒助理',
  greeter: '招待',
  prayerMeeting: '禱告會',
  potluck: '愛筵',
  dishWashing: '洗碗',
  specialDay: '特別日子',
};
//#endregion
