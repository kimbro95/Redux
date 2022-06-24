import { createStore } from "redux";

const countModifier = (count = 0, action) => {
    console.log(count, action);
    if (action.type === "add") {
        return count + 1;
    } else if (action.type === "minus") {
        return count - 1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "minus" });
countStore.dispatch({ type: "???" });

console.log(countStore.getState());