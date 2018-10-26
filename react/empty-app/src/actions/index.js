/*
List of action use to interact with the store via the reducers
*/
export const addItem = (item) => {
    return { type: 'ADD_ITEM', item: item };
}

export const removeItem = (item) => {
    return { type: 'REMOVE_ITEM', item: item };
}

export const loadItems = (itemList) => {

    return { type: 'LOAD_ITEMS', itemList: itemList };
}

export const setSelectedSlid = (slid_obj) => {
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj: slid_obj
    };
}

export const updateContentMap = (content_obj) => {
    return {
        type: 'UPDATE_CONTENT_MAP',
        obj: content_obj
    }
}