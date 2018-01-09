const APIServices = [
    require('./user-services')
];

module.exports = (app) => {
    APIServices.forEach((service) => {
        service(app)
    });
}