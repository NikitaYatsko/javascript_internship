export function array3() {
    let styles = ["Джаз", "Блюз"];
    console.log(styles);
    styles.push("Рок-н-ролл");
    console.log(styles);
    let changed = Math.floor(styles.length / 2)
    styles.splice(changed, 1, "Классика")
    console.log(styles);
    console.log(styles.shift());
    styles.unshift("Реп", "Регги")
    console.log(styles);
}
