const authenticate = require('../middlewares/authenticate-middleware');
const { Culebra } = require('../models/culebra');
const ExpressRouter = require('express-promise-router');
const _ = require('lodash');

const PUBLIC_CULEBRA_ATTRS = ['name', 'email', 'cellphone', 'owner', 'amountDue', 'loanDate', 'notificationDays'];
const sanitazeModel = model => _.pick(model, PUBLIC_CULEBRA_ATTRS);
const router = ExpressRouter();

router.post('/', authenticate, async (req, res) => {
    const culebra = new Culebra(req.body);
    culebra.owner = req.user._id;

    await culebra.save();

    res.setResultData(sanitazeModel(culebra))
        .sendStandard();
});

router.get('/', authenticate, async (req, res) => {
    const culebras = await Culebra.findByOwner(req.user._id);

    res.setResultData(_.map(culebras, sanitazeModel))
        .sendStandard();
});

module.exports = router;