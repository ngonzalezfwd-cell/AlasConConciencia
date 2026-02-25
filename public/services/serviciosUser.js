//GET
async function getUsuarios() {

    try {

        const respuesta = await fetch("http://localhost:3001/usuarios")


        const UserGet = await respuesta.json();


        return UserGet;

    } catch (error) {

        console.error("Error al obtener los usuarios", error);
    }
}

export { getUsuarios }



//POST
async function postUsuarios(usuario) {

    try {

        const respuesta = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })


        const UserPost = await respuesta.json();


        return UserPost;

    } catch (error) {

        console.error("Error al crear el usuario", error);
    }
}

export { postUsuarios }


//Patch
async function patchUsuarios(usuario, id) {

    try {

        const respuesta = await fetch("http://localhost:3001/usuarios/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(usuario)
        })


        const UserPatch = await respuesta.json();


        return UserPatch;

    } catch (error) {

        console.error("Error al actualizar el usuario", error);
    }
}

export { patchUsuarios }


//DELETE

async function deleteUsuarios(id) {

    try {

        const respuesta = await fetch("http://localhost:3001/usuarios/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })


        const UserDelete = await respuesta.json();


        return UserDelete;

    } catch (error) {

        console.error("Error al eliminar el usuario", error);
    }
}

export { deleteUsuarios }

