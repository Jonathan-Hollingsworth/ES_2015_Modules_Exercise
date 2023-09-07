/** Randomly chooses an item from an array and returns it */
function choice(items=[]){
    const idx = Math.floor(Math.random() * items.length)
    const item = items[idx]
    return item
};

/** Removes first matching item from an array and returns it. Returns `undefined` if no match is found */
function remove(items=[], item=any){
    const idx = items.indexOf(item)
    if (idx !== -1) {
        const spliced = items.splice(idx, 1)
        return spliced[0]
    } else {
        return undefined
    };
};

export {choice, remove};