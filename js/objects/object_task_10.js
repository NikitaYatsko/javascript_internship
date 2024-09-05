export function object10() {
    const person1 = {
        name: `Person1`,
        age: 123,
        salary: 1542.33,
        contacts: {
            phone: `112`,
            email: "email@domain.com"
        },
        address: `Moldova`
    }
    const person2 = {
        name: `Person2`,
        age: 123,
        salary: 1542.332,
        contacts: {
            phone: `112`,
            email: "email@domain.com"
        },
        address: `Moldova`
    }

  console.log(  Intersection(person1, person2))

    function Intersection(object1, object2) {

        const result = {}

        for (const key in object1) {
            if (object2.hasOwnProperty(key)) {
                if (object1[key] === object2[key]) {
                    result[key] = object2[key];
                }
            }
        }

    return result;
    }
}