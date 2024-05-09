const tinycolor = require('tinycolor2');

class Utils {
    isValidColor(color) {
        const tc = tinycolor(color);

        return tc.isValid();
    }
}

module.exports = Utils;
