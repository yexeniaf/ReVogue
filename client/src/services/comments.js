import { api } from "./apiConfig";

export const getItemComments = async (item_id) => {
    const res = await api.get(`/item/${item_id}/comments`)
    return res.data
}

export const createComment = async (item_id, commetData) => {
    const res = await api.post(`/items/${item_id}/comments`, {comment: commetData})
    return res.data
}

export const updateComment = async (item_id, comment_id, commentData) => {
    const res = await api.put(`/items/${item_id}/comments/${comment_id}`, {comment:commentData})
    return res.data
}

export const deleteComment = async (item_id, comment_id) => {
    const res = await api.delete(`/item/${item_id}/comments/${comment_id}`)
    return res.data
}