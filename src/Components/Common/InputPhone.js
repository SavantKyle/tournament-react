import React from 'react';

class InputPhone extends React.Component {
    state = {
        wrapperClass: 'form-group text-center',
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

    validateMinLength = (value, valid, minLength) => {
        if (value.length < minLength) {
            this.updateValidationMessage('Phone number is incomplete')
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
        valid = valid && this.validateMinLength(value, valid, 13)
        if (valid) {
            this.setState({ wrapperClass: "form-group text-center", validationMessage: "" })
        }
    }

    tenDigitPhoneNumberMask = (value) => {
        const length = value.length;
        //handle masking for 10-digit phone number (999)999-9999
        if (length === 1 && value !== "(") {
            value = "(" + value;
        }
        if (length === 5 && value.charAt(4) !== ")") {
            value = value.substring(0, 4) + ")" + value.charAt(4);
        }
        if (length === 9 && value.charAt(9) !== "-") {
            value = value.substring(0, 8) + "-" + value.charAt(8);
        }
        if (length > 13) {
            value = value.substring(0, 13);
        }

        return value;
    }

    phoneNumberInputMasking = (event) => {
        let value = event.target.value;
        const length = value.length;
        //check if last keyed value is a number; if not remove last keyed value and return.
        if (isNaN(value.charAt(length - 1))) {
            event.target.value = value.substring(0, length - 1);
            return;
        }

        event.target.value = this.tenDigitPhoneNumberMask(value);
    }

    handleChange = (event) => {
        if (event.target.value.length === 13)
            this.checkValidation(event);
        this.phoneNumberInputMasking(event);
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
                        onBlur={this.handleBlur} />
                    {/* <div className="input text-danger text-center">{this.state.validationMessage}</div> */}
                </div>
            </div>
        );
    }
}

export default InputPhone;