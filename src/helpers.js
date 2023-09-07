/** Randomly chooses an item from an array and returns it */
function choice(items=[]){
    const idx = Math.floor(Math.random() * items.length)
    const item = items[idx]
    return item
};

/** Randomly chooses an item from an array and returns it */
function remove(items=[], item=any){
    const idx = items.indexOf(item)
    if (idx !== -1) {
        items.splice(idx, 1)
        return item
    } else {
        return undefined
    };
};

export {choice, remove};