import {email, pass, remember} from "../utils/global"
import { api } from "../utils/global"

export const isPersistence = async () => {
    const persistence = await window.localStorage.getItem('logged')
    if (persistence) {
        const result = JSON.parse(persistence)
        const acc = await fetch(`${api}/accounts`)
        const data = await acc.json()
        data.find((item) => {
            if (result.account == item.account) {
                email.value = item.account
                pass.value = item.password
                remember.checked = true
                console.log(item.password)
            }
        })
        localStorage.removeItem('logged')
        return alert('Sua conta está persistente')
    }
}