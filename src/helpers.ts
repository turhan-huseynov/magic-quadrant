export const getUniqueId = () => {
    return Math.floor(Math.random() * 10 ** 10).toString();
};

export const randomBetween = (min: number = 0, max: number = 10) => {
    return Math.floor(Math.random() * max + min);
};
