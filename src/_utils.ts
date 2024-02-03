/**
 * 按照順序將 property[] 與 value[] 組成一筆 record
 * @example propertyArr = ['a', 'b', 'c'], valueArr = [1, 2, 3], result: { a: 1, b: 2, c: 3 }
 */
export const mappingPropertyAndValue = <K extends string, V>(
  propertyArr: K[],
  valueArr: V[],
): Record<K, V> => {
  return propertyArr.reduce<Record<K, V>>(
    (acc, key, index) => {
      acc[key] = valueArr[index];
      return acc;
    },
    {} as Record<K, V>,
  );
};
