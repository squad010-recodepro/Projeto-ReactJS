import React from "react";

export default function Cadastro() {
    return (
        <div>

            <main>

                <pré className="container mt-8 row text-start">
                    <h4 className="text-success"> -Paulo Freire </h4>
                    <p> "Enquanto eu luto, sou movido pela esperança; e seu lutar com esperança, posso esperar".</p>
                </pré>
                <h5 className="display-6 row-cols-3 text-center"> Faça seu cadastro</h5>
                <form>
                    <div className="mb-2">
                        <label for="exampleInputEmail1" className="form-label">Login</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Coloque seu apelido</div>
                    </div>
                    <div className="mb-2">
                        <label for="exampleInputPassword1" className="form-label">Nome</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-2">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-2 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Os dados estão corretos</label>
                    </div>
                    <div className="mb-2">
                        <label for="formFile" className="form-label"> Incluir Avatar </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </main>            
        </div>

    )
};