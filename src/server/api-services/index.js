const userServices = require('./user-services');
const culebraServices = require('./culebra-services');

module.exports = (app) => {
    app.use('/api/users', userServices);
    app.use('/api/culebras', culebraServices);
}