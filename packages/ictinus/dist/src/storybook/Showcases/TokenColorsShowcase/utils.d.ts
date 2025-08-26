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
export declare function getAllPaths(obj: any, parentPath?: string): string[];
export declare const getColors: (colorObject: any) => {};
