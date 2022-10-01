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
    'Login realizado com sucesso!',
    'Entrando em sua conta',
    2000
)
}

export const succsessSignupAlert = () => {
    handleAlert(
        'success',
        'Signup realizado com sucesso!',
        'Sua conta foi criada',
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
