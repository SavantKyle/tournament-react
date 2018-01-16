import React from 'react';

class InputEmail extends React.Component {
    state = {
        wrapperClass: 'form-group',
        validationMessage: ' ',
        isValid: true
    }

    updateValidationMessage = (message) => {
        this.setState({ wrapperClass: 'form-group has-error', validationMessage: message, isValid: false });
    }

    validateRequired = (value, valid) => {
        if (value.trim() === "" || value === null) {
            this.updateValidationMessage('REQUIRED');
            return false;
        }
        return true;
    }

    validateEmailFormat = (value, valid) => {
        const regex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regex.test(value)) {
            this.updateValidationMessage('You must enter a valid email address');
            return false;
        }
        return true;
    }

    checkValidation = (event) => {
        const value = event.target.value;

        let valid = true;
        if (this.props.validate.required) {
            valid = valid && this.validateRequired(value, valid);
        }
        valid = valid && this.validateEmailFormat(value, valid)
        if (valid) {
            this.setState({ wrapperClass: "form-group text-center", validationMessage: "" })
        }
    }

    handleChange = (event) => {
        this.checkValidation(event);
        this.props.onChange(event.target.value);
    }

    handleBlur = (event) => {
        this.checkValidation(event);
    }

    render() {
        const { name, placeholder, value } = this.props;

        return (
            <div className={this.state.wrapperClass}>
                <div className="field">
                    <input type="text"
                        name={name}
                        className="form-control text-center input-sm"
                        placeholder={placeholder}
                        ref={name}
                        value={value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <div className="input text-danger">{this.state.validationMessage}</div>
                </div>
            </div>
        );
    }
}

export default InputEmail;