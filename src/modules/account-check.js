import { api } from "../utils/global"
export const getAccount = async () => {
    const response = await fetch(`${api}/accounts`)
    const data = await response.json()
    return data
}