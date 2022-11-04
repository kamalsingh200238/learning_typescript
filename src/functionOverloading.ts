console.log("now this is functionOverloading");
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
const objectParser = (
  arg1: unknown,
  arg2?: unknown,
  arg3?: unknown
): Person => {
  if (typeof arg1 === "object") {
    return {
      ...(arg1 as Person),
    };
  } else {
    return {
      firstName: arg1 as string,
      lastName: arg2 as string,
      age: arg3 as number,
    };
  }
};

console.log(
  "this is objectParser ==>",
  objectParser({ firstName: "kamal", lastName: "singh", age: 20 })
);
console.log("this is objectParser ==>", objectParser("kamal", "singh", 20));
