import marky = require('marky');

const start = marky.mark;

const stop = (name: string) => {
    const result = marky.stop(name);
    return result.duration;
};

const stopPrint = (name: string) => {
    const duration = stop(name);
    console.log(`${name} took ${duration}ms`);
    return duration;
};

export { start, stop, stopPrint };
