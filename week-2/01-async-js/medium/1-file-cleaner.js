const fs = require('fs');

function cleanFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      return;
    }
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile(filename, cleanedData, function(err) {
      if (err) {
        console.error(err);
      }
    });
  });
}

cleanFile('1-file-cleaner.md')