export const ConveterDecimalForBinary = ({ decimal }) => {
    const validationDecimal = isNaN(decimal) ? 0 : decimal

    let quociente = validationDecimal
    const division = []

    while (quociente > 2) {
        const resto = quociente % 2
        division.push(resto)
        quociente = Math.floor(quociente / 2)
    }
    if (quociente == 1 || quociente == 0){
        division.push(quociente)
    }

    const binary = division.slice(0).reverse();
    
    return binary
}
