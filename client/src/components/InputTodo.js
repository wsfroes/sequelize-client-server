import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name , email};
            console.log(body);
            const body_e = { email };
            console.log(body_e);
            //console.log(body_n, body_e);
            const response = await fetch("http://localhost:3333/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            //window.location = "/";
        } catch (err) {
            console.error(err.mesage);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Usuários</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <h3>Usuário: </h3>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <h3>Email: </h3>
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>


    )
}

export default InputTodo;