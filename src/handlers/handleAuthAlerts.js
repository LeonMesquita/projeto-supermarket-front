import handleAlert from "./handleAlert";



export const handleIsEmpty = () => {
    handleAlert(
        "warning",
        "Oops...",
        "Você deve preencher todos os campos!",
        2000
    );
}

export const succsessSigninAlert = () => {
handleAlert(
    'success',
    'Login concluído!',
    '',
    2000
)
}

export const succsessSignupAlert = () => {
    handleAlert(
        'success',
        'Signup concluído!',
        '',
        2000
    )
}



export const incorrectEmailAlert = (message) => {
    handleAlert(
        'error',
        'Erro!',
        message,
        2000
    )
}
