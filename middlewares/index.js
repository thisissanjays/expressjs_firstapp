const fs = require('fs');

function logReqRes (filename){
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `Request: ${req.method} ${req.url} at ${new Date().toISOString()}\n`,
            (err,data) => {
                next();
            }
            
        );
    };
}

module.exports = {
    logReqRes,
};