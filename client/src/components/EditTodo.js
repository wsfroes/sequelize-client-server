import React, { Fragment, useState } from "react";

const EditTodo = ({ users }) => {
    const [name, setName] = useState(users.name);
    const [email, setEmail] = useState(users.email);

    // edit description function
    const updateUser = async e => {
        e.preventDefault();
        try {
            const body = {name, email};
            
            const response = await fetch(`https://node-serv-todo.herokuapp.com/users/${users.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
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
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${users.id}`}>
                Edit
            </button>

            {/* id = id10 */}

            <div
                className="modal fade"
                id={`id${users.id}`}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel">Editar Usuário</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    setName(users.name)
                                    setEmail(users.email)
                                }} 
                            />
                        </div>
                        <div className="modal-body">
                            <label>Usuário:
                            <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            </label>
                            <label>Email:
                            <input
                            type="text" 
                            className="form-control" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-dismiss="modal"
                                onClick={e => updateUser(e)}
                            >Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setName(users.name)
                                    setEmail(users.email)
                                }}
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo;