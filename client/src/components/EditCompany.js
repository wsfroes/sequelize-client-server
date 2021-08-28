import React, { Fragment, useState } from "react";

const EditCompany = ({ companys }) => {
    const [nameCompany, setNameCompany] = useState("");
    const [schema, setSchema] = useState("");
    const [urlHelp, setUrlHelp] = useState("");

    // edit description function
    const updateUser = async e => {
        e.preventDefault();
        try {
            const body = { nameCompany, schema, urlHelp };

            const response = await fetch(`http://localhost:5000/companys/${companys.id}`, {
                method: "PUT",
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
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${companys.id}`}>
                Edit
            </button>

            <div
                className="modal fade"
                id={`id${companys.id}`}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel">Editar Companhia</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    setNameCompany(companys.nameCompany)
                                    setSchema(companys.schema)
                                    setUrlHelp(companys.urlHelp)
                                }}
                            />
                        </div>
                        <div className="modal-body">
                            <label>Companhia:
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nameCompany}
                                    onChange={e => setNameCompany(e.target.value)}
                                />
                            </label>
                            <label>Schema:
                                <input
                                    type="text"
                                    className="form-control"
                                    value={schema}
                                    onChange={e => setSchema(e.target.value)}
                                />
                            </label>
                            <label>Link de Ajuda:
                                <input
                                    type="text"
                                    className="form-control"
                                    value={urlHelp}
                                    onChange={e => setUrlHelp(e.target.value)}
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
                                    setNameCompany(companys.nameCompany)
                                    setSchema(companys.schema)
                                    setUrlHelp(companys.urlHelp)
                                }}
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditCompany;