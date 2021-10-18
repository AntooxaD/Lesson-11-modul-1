export const getDays = time => Math.floor(time / (1000 * 60 * 60 * 24));

console.log(getDays());

export const getHours = time => Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

console.log(getHours());

export const getMin = time => Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 ));

console.log(getMin());

export const getSec = time => Math.floor(time % (1000 * 60 * 60 * 24) / (1000));

console.log(getSec());