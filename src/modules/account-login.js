import { email, pass, remember } from "../utils/global"
import { persistenceCreate } from "../services/persistence-create"
import { getAccount } from "./account-check"
export const loggin = async ({ Email, Pass }) => {
    const response = await getAccount()
    try {
        const result = await response.find((item) => {
            const finaly = Email === item.account ? true : false
            if (finaly) {
                return item
            }
        })
        if (remember.checked && result) {
            persistenceCreate(Email)
        }
        remember.checked = false
        email.value = ''
        pass.value = ''
    } catch (error) {
        console.log(error)
        alert('Não foi possivel efetuar o login')
    }
}