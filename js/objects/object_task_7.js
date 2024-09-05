export function object7() {
    const person = {
        name: "Person",
        age: 123,
        salary: 1542.33,
        contacts: {
            phone: "112",
            email: "email@domain.com"
        },
        address: "Moldova",
        get personName() {
            return `${this.name}`;
        },
        get personAge() {
            return `${this.age}`;
        },
        get personSalary() {
            return `${this.salary}`;
        },
        get personContacts() {
            return `${Object.entries(this.contacts)
                .map(([key,value])=>`${key}:${value}`)}`;
        },
        get personAddress() {
            return `${this.address}`;
        }
    }

    console.log(person.personName);
    console.log(person.personAge);
    console.log(person.personSalary);
    console.log(person.personContacts);
    console.log(person.personAddress);

}