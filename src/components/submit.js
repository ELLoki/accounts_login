import { email, pass } from "../utils/global"
import { loggin } from "../modules/account-login"
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const Email = email.value
    const Pass = pass.value
    loggin({ Email, Pass })
})