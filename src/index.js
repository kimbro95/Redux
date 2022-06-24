import { createStore } from "redux";

const countModifier = (count = 0) => {
    console.log(count);
    return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());