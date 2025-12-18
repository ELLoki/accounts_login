export const persistenceCreate = (accounts) => {
    window.localStorage.setItem('logged', JSON.stringify({
        account: accounts,
        logged: true
    }))
}