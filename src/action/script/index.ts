import * as count from "../../module/count";

let num: number = 0;

const root = document.querySelector(".count") as HTMLInputElement;
root.addEventListener("click", function () {
    num = count.add(num);
    root.value = num.toString();
}, false);
