interface User{
    name: string;
    email: string
    address?: string;
}
function getUser():User {
    return {
        name: "Silvan",
        email: "teste@teste.com"
    }
}

function setUser(usuario:User) {
    //....
}