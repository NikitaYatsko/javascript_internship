export function object12() {

    const person = {
        first: "Ion",
        last: "Creanga",
        company: "'Amintiri din copilarie SRL",
    }


    displayName(person);

    function displayName({first, last, company}) {
        alert(`Name: ${first} ${last}, Company: ${company}`)
    }

}