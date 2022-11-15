import React from 'react';
import Imagem1 from "../imagem/Theones.svg"
import Imagem2 from "../imagem/Elcio.svg"
import Imagem3 from "../imagem/Débora.svg"

export default function Squad() {
    return (
        <div>
            <section>
				<p className="display-6 text-center"> Educar é impregnar de sentido o que fazemos a cada instante. "Paulo
					Freire".</p>
				<div className=" vstack gap-4 col-md-8 gap-8 mx-auto my-4">
					<ul className="fotos-equipe list-group">						
						<li className="list-group-item"><img className="fotos" src={Imagem1} alt="Theones"> Theones - Especialista Front
							End/Design</img></li>						
						<li className="list-group-item"><img className="fotos" to={Imagem2} alt=" Elcio"> Elcio - Especialista Front/Back
							End</img></li>						
						<li className="list-group-item"><img className="fotos" to={Imagem3} alt="Débora"> Débora - Especialista Front
							End/Design</img></li>
					</ul>
				</div>
			</section>
			<section className="container">
				<p className="row display-6 text-start"> Mande sua mensagem </p>
				<div className="container mt-3">
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">Nome completo</label>
						<input type="text" className="form-control" id="exampleFormControlInput1"
							placeholder="Digite aqui seu nome" />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlInput2" className="form-label">E-mail</label>
						<input type="email" className="form-control" id="exampleFormControlInput2"
							placeholder="Digite aqui seu e-mail" />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlTextarea1" className="form-label">Sugestões</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						<input className="btn btn-primary mt-3" type="submit" value="Enviar" />
					</div>
				</div>
			</section>
        </div>
    )
};