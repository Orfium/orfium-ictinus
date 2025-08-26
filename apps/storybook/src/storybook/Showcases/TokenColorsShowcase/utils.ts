/** This util takes an multi-level object and flattens it into single-level object where every key's value is an array of the paths underneath
 *
 * e.g. given an arg: 
 *     { 
 *      b: { 
 *        c: { 
 *          e: value, 
 *          f: value
 *         }, 
 *        d: value
 *      } 
 * 
 *      ====> {b : [c.e, c.f, d]}
 *
 */
export function getAllPaths(obj: any, parentPath: string = ''): string[] {
  let paths: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const fullPath = parentPath ? `${parentPath}.${key}` : key;

      if (fullPath !== 'value' && fullPath !== 'type') {
        if (
          typeof obj[key] === 'object' &&
          !Object.prototype.hasOwnProperty.call(obj[key], 'value')
        ) {
          paths = paths.concat(getAllPaths(obj[key], fullPath));
        } else {
          paths.push(fullPath);
        }
      }
    }
  }

  return paths;
}

export const getColors = (colorObject: any) => {
  const g = {};

  Object.keys(colorObject).forEach((color) => {
    g[color] = getAllPaths(colorObject[color]);
  });

  return g;
};
