export function alg2() {
    let data = {

        "Рыбы": {
            "форель": {}, "лосось": {}
        },

        "Деревья": {
            "Огромные": {
                "секвойя": {}, "дуб": {}
            }, "Цветковые": {
                "яблоня": {}, "магнолия": {}
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


//
    function createMatrix(rows, cols) {
        let matrix = [];
        let value = 0;

        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                if (i === j) {
                    row.push(value);
                    value++;
                } else {
                    row.push(Math.floor(Math.random() * 10));
                }
            }
            matrix.push(row);
        }

        return matrix;
    }


    const result = createMatrix(4, 4);
    console.log(result);
//вообще не понимаю закономерность кроме того,что по диагонали 0 1 2 3 и тд, поэтому заполнил рандомными числами
}