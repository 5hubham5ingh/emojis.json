
/* 
 Use categories.json to create ASCII NUL cherector seperator string of emojies with name, unicode, category and description..
 Structure: 
 unicode\0name\0category\0description
*/

const emojisJson = require("./categories.json");

let result = '';

for (const [categoryName, emojisCollection] of Object.entries(emojisJson.emojis)) {
  for (const [description, emojisList] of Object.entries(emojisCollection)) {
    for (const emoji of emojisList) {
      const unicode = emoji.code
        .map(code => String.fromCodePoint(parseInt(code, 16)))
        .join("");
      result += `${unicode} : ${emoji.name}\n${categoryName}\n${description}\0`;
    }
  }
}

console.log(`
export const Emojies = \`${result}\`;
`);
