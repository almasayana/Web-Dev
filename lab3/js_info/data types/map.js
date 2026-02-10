function unique(arr) {
  return Array.from(new Set(arr));
}

let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys.push("more");