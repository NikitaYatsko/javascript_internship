export function object10() {
    const person1 = {
        name: 'Person1',
        age: 123,
        salary: 1542.33,
        contacts: {
            phone: '112',
            email: 'email@domain.com'
        },
        address: 'Moldova'
    };
    const person2 = {
        name: 'Person2',
        age: 123,
        salary: 1542.332,
        contacts: {
            phone: '112',
            email: 'email@domain.com'
        },
        address: 'Moldova'
    };

    console.log(Intersection(person1, person2));

    function Intersection(object1, object2) {
        const result = {};

        for (const key in object1) {
            if (object2.hasOwnProperty(key)) {
                if (typeof object1[key] === 'object' && object1[key] !== null &&
                    typeof object2[key] === 'object' && object2[key] !== null) {
                    if (Intersection(object1[key], object2[key])) {
                        result[key] = Intersection(object1[key], object2[key]);
                    }
                } else if (object1[key] === object2[key]) {
                    result[key] = object1[key];
                }
            }
        }

        return result;
    }
}
//использовал ии так как задача оказалось сложной для меня,скорее всего еще раз пройдусь по обьектам самостоятельно