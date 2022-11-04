const add = (a: number = 0, b: number = 0, c: number = 0): number => {
  return a + b + c;
};

const addString = (str1: string = "first", str2: string = "second"): string => {
  return `${str1} ${str2}`;
};

const promiseReturn = (url: string): Promise<string> => {
  return Promise.resolve(`data from ${url}`);
};

type MutateFunction = (v: number) => number;

const arrayMutate = (arr: number[], mutate: MutateFunction): number[] => {
  return arr.map(mutate);
};

const multipleByTen = (num: number): number => {
  return num * 10;
};

console.log("this is the add function", add(100, 16, 17));
console.log("this is the add function", add());
console.log("this is the addString function==>", addString("kamal", "singh"));
console.log("this is the addString function==>", addString());
console.log(
  "this is the arrayMutate function==>",
  arrayMutate([2, 5, 6, 10], multipleByTen)
);
console.log(
  "this is the arrayMutate function==>",
  arrayMutate([6, 10, 100], multipleByTen)
);
