import { useState } from "react"

function teste(){
    validationDecimal = 100
    const [quociente, setQuociente] = useState(validationDecimal)
    const binary = []

    while (quociente > 2) {
        const resto = quociente % 2
        binary.push(resto)
        setQuociente(resto / 2)
        console.log("quociente = ", quociente)
        console.log("resto = ", resto)
        console.log(binary)
    }
}

teste()