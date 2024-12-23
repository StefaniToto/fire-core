type GenericKeyObject<K extends keyof INameAgeNationalityRequired, T> = {
  [P in K]?: T;
};

export interface INameAgeNationalityRequired {
  age: number;
  name: string;
  nationality: string;
}

export type OptionalInterface<T> = {
  [K in keyof T]?: T[K];
};

export function getObjectProps<Obj extends OptionalInterface<any>>(
  obj: Obj
): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[];
}

export function pickObjectKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
