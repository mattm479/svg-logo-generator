const fs = require('fs');
const path = require('path');

class File {
    constructor(dir, fileName) {
        this.dir = dir;
        this.fileName = fileName;
    }

    writeToFile(data) {
        if (!fs.existsSync(this.dir)) {
            fs.mkdirSync(this.dir);
        }

        fs.writeFile(path.join(this.dir, this.fileName), data, err => (err) ? console.error(err) : console.log('Generated logo.svg'));
    }
}

module.exports = File;
