let text = "Hello World";

console.log(`Input String: ${text}`);

console.log(`Output String: ${text.split("").map((item,index) => (index % 2 == 0) ? "*": item).join("")}`);

console.log(`Hashed Characters: ${text.split("").filter((item,index) => index % 2 == 0).join(",")}`);