/**
 * Example:
 *
 * interface Person {
 *   name: string;
 *   age: number;
 *   address: {
 *     city: string;
 *     street: string;
 *   };
 * }
 *
 * const partialPerson: DeepPartial<Person> = {
 *   name: 'John',
 *   address: {
 *     city: 'New York',
 *   },
 * };
 */
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };
