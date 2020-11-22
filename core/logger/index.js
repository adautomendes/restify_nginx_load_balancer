module.exports = marker => {
    var module = {
        printRequest(req, res, next) {
            const { method, body } = req;

            let msg = `${method} ${req.getHref()}`;

            if (body && Object.keys(body).length > 0) { // If it has body
                msg += ` ${JSON.stringify(body)}`; // Include body in log
            }

            console.log(`[${marker}] - ${msg}`);

            next();
        }
    };

    return module;
}