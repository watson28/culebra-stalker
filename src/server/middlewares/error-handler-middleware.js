const _ = require('lodash');
const HTTP_SERVER_ERROR = 500;
const HTTP_BAD_REQUEST = 400;

const cleanValidationError = (err) => {
    const errorKeys = Object.keys(err.errors);
    const omitPaths = errorKeys.reduce((paths, key) => {
        return paths.concat([
            `errors.${key}.properties`,
            `errors.${key}.kind`,
            `errors.${key}.path`,
            `errors.${key}.$isValidatorError`,
        ])
    }, ['name', '_message']);

    return _.omit(err, omitPaths);
}

const handleValidationError = (err, req, res) => {
    res.status(HTTP_BAD_REQUEST)
    .setResultCode('VALIDATION_ERROR')
    .setResultData(cleanValidationError(err))
    .addNotification('error', 'VALIDATION_ERROR_MSG')
    .sendStandard();
};

const handleGeneralError = (err, req, res) => {
    res.status(err.status || HTTP_SERVER_ERROR)
    .setResultCode('UNHANDLED_ERROR')
    .setResultData(err)
    .addNotification('error', 'UNHANDLED_ERROR_MSG')
    .sendStandard();
};

module.exports = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err.name === 'ValidationError') {
        handleValidationError(err, req, res);
    } else {
        handleGeneralError(err, req, res);
    }
}