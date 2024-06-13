// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// Import the 'fs' module
const fs = require('fs');

// The content to write to the file
const content = 'This is the content to be written to the file.';

// Asynchronous file write
fs.writeFile('example.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File has been written asynchronously');
});
