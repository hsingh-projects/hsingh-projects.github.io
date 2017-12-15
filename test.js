

var ciyClass = ["Class A", 1,"Class C"];

var oneClass = "Class D";

console.log(ciyClass);
console.log(ciyClass.length);
console.log(oneClass);
console.log(ciyClass[2]);

ciyClass.push("Class D");
ciyClass.pop();
ciyClass.unshift("Class A+");
ciyClass.shift();


ciyClass.splice(2, 0, "Class B+");
console.log(ciyClass);
ciyClass.splice(1,0,"Class A+");
ciyClass.splice(2, 0, "Class A-");