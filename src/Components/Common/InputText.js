import React from 'react';

class InputText extends React.Component {
    state = {
        wrapperClass: 'form-group text-center',
        validationMessage: '',
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

    validateMinLength = (value, valid, minLength) => {
        if (value.length < minLength) {
            this.updateValidationMessage(`The value entered must have at least ${minLength} characters`);
            return false;
        }
        return true;
    }

    validateMaxLength = (value, valid, maxLength) => {
        if (value.length > maxLength) {
            this.updateValidationMessage(`The value entered must cannot have more than ${maxLength} characters`);
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
        if (this.props.validate.minLength) {
            valid = valid && this.validateMinLength(value, valid, this.props.validate.minLength)
        }
        if (this.props.validate.maxLength) {
            valid = valid && this.validateMaxLength(value, valid, this.props.validate.maxLength)
        }
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
                    {/* <div className="input text-danger text-center">{this.state.validationMessage}</div> */}
                </div>
            </div>
        );
    }
}

export default InputText;