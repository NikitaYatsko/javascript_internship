export function array3() {
    let styles = ["Джаз", "Блюз"];
    console.log(styles);
    styles.push("Рок-н-ролл");
    console.log(styles);
    styles.splice(1, 1, "Классика");
    console.log(styles);
    console.log(styles.shift());
    console.log(styles);
    styles.splice(0, 0, "Реп", "Регги");
    console.log(styles);
}
