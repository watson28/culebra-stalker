const mongoose = require('mongoose');
const validator = require('validator');
const moment = require('moment');

const schemaDefinition = {
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        validate: {
            validator: value => /^([A-Za-z]|\s)+$/.test(value),
            message: '{VALUE} is not a valid name'
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },

    cellphone: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        validate: {
            validator: value => validator.isMobilePhone(value, 'en-US'),
            message: '{Value} is not a valid phone number'
        }
    },

    amountDue: {
        type: Number,
        required: true,
        validate: {
            validator: value => value > 0,
            message: 'Invalid amount'
        }
    },

    loanDate: {
        type: Date,
        required: true,
        validate: {
            validator: value => moment(value).isSameOrBefore(new Date(), 'days'),
            message: 'Future date not allowed'
        }
    },

    notificationDays: {
        type: Number,
        required: true,
        validate: {
            validator: value => value > 0,
            message: 'Invalid days value'
        }
    }
};

const schemaOptions = { timestamps: true };
const CulebraSchema = new mongoose.Schema(schemaDefinition, schemaOptions);

CulebraSchema.statics.findByOwner = function (OwnerId) {
    const Culebra = this;

    return Culebra.find({'owner': OwnerId});
};

let Culebra = mongoose.model('Culebra', CulebraSchema);

module.exports = {Culebra};
