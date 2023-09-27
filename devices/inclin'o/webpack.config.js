const path = require("path");

module.exports = {
    target: "node",
    mode: "production",
    entry: "./inclin'o.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../../distrib/inclin'o"),
        library: "driver",
    },
};