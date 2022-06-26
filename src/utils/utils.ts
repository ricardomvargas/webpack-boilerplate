/**
 * This is a experiement: Using a Generator to create a function that will always return
 * a different number to be used as keys of a React list component.
 * There are other ways to accomplish the same result.
 */
export function* createListItemKey() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
