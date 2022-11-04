const add = (a: number = 0, b: number = 0, c: number = 0): number => {
  return a + b + c;
};

const addString = (str1: string = "first", str2: string = "second"): string => {
  return `${str1} ${str2}`;
};

console.log("this is the add function", add(100, 16, 17));
console.log("this is the add function", add());
console.log("this is the addString function==>", addString("kamal", "singh"));
console.log("this is the addString function==>", addString());
