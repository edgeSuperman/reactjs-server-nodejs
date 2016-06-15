/**
 * Created by danghongyang on 16/6/15.
 */

module.exports = {
    entry: "./static/build/app.js",
    output: {
        path:  "static/output/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};