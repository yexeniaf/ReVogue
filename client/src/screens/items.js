import { api } from "./apiConfig";

export const getAllItems  = async () => {
    const res = await api.get('/items')
    return res.data
}

export const getOneItem  = async (item_id) => {
    const res = await api.get(`/items/${item_id}`)
    return res.data
}

export const createItem  = async (itemData) => {
    const res = await api.get('/items', {item: itemData})
    return res.data
}

export const updateItem  = async (item_id, itemData) => {
    const res = await api.get(`/items/${item_id}`, {item: itemData})
    return res.data
}

export const deleteItem  = async (item_id) => {
    const res = await api.get(`/items/${item_id}`)
    return res.data
}