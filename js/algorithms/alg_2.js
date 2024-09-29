export function alg2(){
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
    function createMatrix(row, cols) {
        let matrix = [];
        let value = 0;
        for (let i = 0; i < row; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(value++);
            }

            matrix.push(row);

        }
        return matrix;


    }

    console.log(createMatrix(3, 3));
//понятия не имею как это решить.





}