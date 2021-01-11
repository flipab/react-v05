import React from "react";




function Contato() {
    return (
        <div className="contato">
        <div className="info">
        <h3>Mercadex</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada enim sed gravida consequat. Sed elementum tortor ut ullamcorper lobortis. </p>
        </div>
        <div className="sociais">
        <h3>Siga-nos</h3>
        <br></br>
        <button className="facebook-btn"><i className="fab fa-facebook"></i>Facebook Mercadex</button>
        
        <br></br>
        <button className="instagram-btn"><i className="fab fa-instagram"></i> Instagram Mercadex</button>
       


        </div>
        <div>
        <h3>Contatos</h3>
        <br></br>
        <p>41 3333 3333 </p>
        <p>mercadex@mercadex.com.br </p>

        </div>
        </div>
    );
}

export default Contato;