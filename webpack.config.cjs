module.exports = {
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            "child_process": false,
            // and also other packages that are not found
        }
    },
}