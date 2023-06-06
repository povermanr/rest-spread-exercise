const filterOdds = (...args) => args.filter(v => v % 2 === 0)

const findMin = (...args) => Math.min(...args);

const mergeObjects = (key, value) => ({ ...key, ...value });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

const addKeyValue = (obj, key, value) => {
    let newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
};

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

const update = (obj, key, value) => {
    let newObj = { ...obj }
    newObj[key] = value;
    return newObj;
};