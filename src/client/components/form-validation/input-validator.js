import Input from 'react-validation/build/input';
import { PureComponent } from 'react';
import _ from 'lodash';
import * as validators from 'validators';

class InputValidator extends PureComponent {

    render () {
        let newProps = _.extend({}, this.props, {
            validations: []//this.transformValidations(this.props.validations)
        });
        return <Input {...newProps} />;
    }

    transformValidations (validations) {
        return validations.map(function (validation) {
            if (_.isString(validation)) {
                return validators[validation];
            } else {
                return validation;
            }
        });
    }
}

export default InputValidator;