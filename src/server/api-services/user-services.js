const _ = require('lodash');
const authenticate = require('../middlewares/authenticate-middleware');
const { User } = require('../models/user');
const ExpressRouter = require('express-promise-router');

const PUBLIC_USER_ATTRS = ['_id,', 'name', 'email'];
const router = ExpressRouter();

router.post('/', async (req, res) => {
    try {
        const body = _.pick(req.body, ['name', 'email', 'password']);
        const user = new User(body);
        await user.save();
        const token = await user.generateAuthToken();
        res.header('x-auth', token)
        .setResultData(_.pick(user, PUBLIC_USER_ATTRS))
        .sendStandard();
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/login', async (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await User.findByCredentials(body.email, body.password);

    if (user === null) {
        res.status(400)
        .addNotification('error', 'INVALID_CREDENTIALS_MSG')
        .setResultCode('INVALID_CREDENTIALS')
        .sendStandard();
    } else {
        const token = await user.generateAuthToken();
        res.header('x-auth', token)
        .setResultData(_.pick(user, PUBLIC_USER_ATTRS))
        .sendStandard();
    }
});

router.get('/me', authenticate, (req, res) => {
    res.setResultData(_.pick(req.user, PUBLIC_USER_ATTRS))
    .sendStandard();
});

router.delete('/me/token', authenticate, async (req, res) => {
    try {
      await req.user.removeToken(req.token);
      res.status(200).send();
    } catch (e) {
      res.status(400).send();
    }
});

module.exports = router;