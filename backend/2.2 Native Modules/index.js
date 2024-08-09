const fs = require('fs');
fs.writeFile("message.txt", "Hello from node.js!", (err) => {
  if (err) throw err;
  console.log("Saved!");
})