import Iban from 'iban'

function minimalLength(minLength) {
    return value => {
        return value.length >= minLength || false
    }
}

function maximalLength(maxLength) {
    return value => {
        return value.length >= maxLength || false
    }
}

function isEmail() {
    return value => {
        /*eslint no-useless-escape:0*/
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(value).toLowerCase())
    }
}

function isIBAN() {
    return value => {
        return Iban.isValid(value)
    }
}

export const Validators = {
    required: () => {
        return minimalLength(1)
    },
    email: isEmail,
    minLength: minLength => {
        return minimalLength(minLength)
    },
    maxLength: maxLength => {
        return maximalLength(maxLength)
    },
    iban: isIBAN
}

