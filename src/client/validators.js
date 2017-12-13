import validator from 'validator';

export const required = (value) => {
    if (!value.toString().trim().length) {
        return 'required';
    }
};

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return 'invalid email';
    }
};

export const minLength = (value, props) => {
    if (!value.toString().trim().length < props.minLength) {
        return `must be at least ${props.minLength} characters length`;
    }
};