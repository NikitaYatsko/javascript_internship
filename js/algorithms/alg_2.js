export function alg2(){
    let data = {

        "Рыбы": {
            "форель": {},
            "лосось": {}
        },

        "Деревья": {
            "Огромные": {
                "секвойя": {},
                "дуб": {}
            },
            "Цветковые": {
                "яблоня": {},
                "магнолия": {}
            }

        }

    }

    function createTree(container, data) {
        const containerElement = document.querySelector(container);
        function createList(data) {
            const ul = document.createElement('ul');
            for (let key in data) {
                const li = document.createElement('li');
                li.textContent = key;
                if (Object.keys(data[key]).length > 0) {
                    li.appendChild(createList(data[key]));
                }
                ul.appendChild(li);
            }
            return ul;
        }

        containerElement.innerHTML = '';
        containerElement.appendChild(createList(data));
    }

    createTree(".container", data);
}