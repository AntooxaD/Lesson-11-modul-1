import { getDays } from "./task-1.js";

const date1 = new Date('06/30/2019');
const date2 = new Date('04/23/2020');

const dateDiff = date2.getTime() - date1.getTime();
console.log(getDays(dateDiff));