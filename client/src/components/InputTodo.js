import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, email };
            console.log(body);

            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.mesage);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Usuários</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <h3>Nome: </h3>
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
            </form>
            <br />
            <div class="d-grid gap-2">
                <button className="btn btn-success">Add</button>
            </div>

        </Fragment>


    )
}

export default InputTodo;