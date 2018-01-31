class validation {
    static requiredIsValid = (value) => {
        if (value.trim() === "" || value === null) {
            return false;
        }
        return true;
    }

    static minLengthIsValid = (value, minLength) => {
        if (value.length < minLength) {
            return false;
        }
        return true;
    }

    static maxLengthIsValid = (value, maxLength) => {
        if (value.length > maxLength) {
            return false;
        }
        return true;
    }

    static emailFormatIsValid = (value) => {
        const regex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regex.test(value)) {
            return false;
        }
        return true;
    }
}

export default validation; 