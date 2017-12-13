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
        var isValid = this.form.getChildContext()._errors.length === 0;
        
        if (isValid) {
            props.onValidFormSubmit && props.onValidFormSubmit.call(this.form.values());
        } else {
            let errors = {};
            props.onInvalidFormSubmit && props.onInvalidFormSubmit.call(errors, this.form.values);
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

FormValidator.PropTypes = {
    onValidFormSubmit: PropTypes.func,
    onInvalidFormSubmit: PropTypes.func
};

export default FormValidator;