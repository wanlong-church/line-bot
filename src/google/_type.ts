export type GoogleSheetResponse<K extends string, V> = {
  columnOrder: K[];
  headers: Record<K, V>[];
  data: Record<K, V>[];
};
