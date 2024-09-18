export function json1() {
    //task1
    const names = ["james", "jake"];
    const jsonNames = JSON.stringify(names);
    console.log(jsonNames);

    //task2
    const power = {
        power: 250,
        current: 12,

    }

    const jsonPower = JSON.stringify(power);
    console.log(jsonPower);
    //task3
    const nonJson = JSON.parse(jsonNames);
    console.log(nonJson);
    //task 4
    const nonJsonPower = JSON.parse(jsonPower);
    console.log(nonJsonPower);
    //task5 https://jsoneditoronline.org/#left=local.zinona

    fetch('js/JSON/json.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.json_block').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching JSON:', error));

}