const dotDecimal = number => {
    if(isNaN(number)){
        throw new Error(`${number} is not a number`)
    } else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}

const REGEX = { dotDecimal }

export default REGEX;