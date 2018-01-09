import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';

class FormValidator extends PureComponent {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let props = this.props;

        event.preventDefault();
        this.form.validateAll();
        let isValid = this.form.getChildContext()._errors.length === 0;
        
        if (isValid) {
            props.onValidFormSubmit && props.onValidFormSubmit(this.form.getValues());
        } else {
            let errors = {};
            props.onInvalidFormSubmit && props.onInvalidFormSubmit.call(errors, this.form.getValues());
        }
    }

    render () {
        return (
            <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit}>
                {this.props.children}
            </Form>
        );
    }
}

FormValidator.propTypes = {
    onValidFormSubmit: PropTypes.func,
    onInvalidFormSubmit: PropTypes.func
};

export default FormValidator;