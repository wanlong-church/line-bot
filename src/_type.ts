/** google sheet column properties */
export type SheetColumnProperty =
  | 'date'
  | 'speaker'
  | 'facilitator'
  | 'communion'
  | 'pianist'
  | 'choir1'
  | 'choir2'
  | 'guitar'
  | 'bass'
  | 'drums'
  | 'slides'
  | 'soundControl'
  | 'liveStream'
  | 'youthLeaderMiddleGrade'
  | 'nurseryCoordinator'
  | 'nurseryAssistant'
  | 'greeter'
  | 'prayerMeeting'
  | 'potluck'
  | 'dishWashing'
  | 'specialDay';

/** Google Sheet 欄位資料 */
export type SheetFieldRecord = Record<SheetColumnProperty, string>;

//endregion
