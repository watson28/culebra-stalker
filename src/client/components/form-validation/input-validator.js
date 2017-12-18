import Input from 'react-validation/build/input';
import { PureComponent, Component } from 'react';
import _ from 'lodash';
import * as validators from 'validators';

// TODO figure out way to transform component to Pure. having it as a PureComponent, make react-validation not working
class InputValidator extends Component {

    render () {
        let newProps = _.extend({}, this.props, {
            validations: this.transformValidations(this.props.validations)
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