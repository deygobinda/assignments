const fs = require('fs')

fs.writeFile(
    '4-write-to-file.md',
    'Hello world',
    {
      flag: 'a',
      encoding: 'utf-8',
    },
    (err) => {
      console.log(err);
    }
  );