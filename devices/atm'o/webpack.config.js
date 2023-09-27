const path = require("path");

module.exports = {
    target: "node",
    mode: "production",
    entry: "./atm'o.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../../distrib/atm'o"),
        library: "driver",
    },
};