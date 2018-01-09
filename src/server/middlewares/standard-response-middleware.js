module.exports = (req, res, next) => {
    let standardResponse = {
        notifications: [],
        result: {
            code: 'OK',
            data: {}
        }
    };

    res.addNotification = (type, message) => {
        standardResponse.notifications.push({type, message});
        return res;
    };
    res.setResultCode = (code) => {
        standardResponse.result.code = code;
        return res;
    };
    res.setResultData = (data) => {
        standardResponse.result.data = data;
        return res;
    };
    res.sendStandard = () => {
        res.send(standardResponse);
        return res;
    };

    next();
};