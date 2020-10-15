import React, { useState} from 'react';
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';


function Genero(){
    const [idGenero, setIdGenero] = useState(0);
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);
    return(
        <div>
            <Header description="Cadastre os gêneros dos filmes"/>
            <div className="genero">
                    <title>Gêneros</title>
                    <form>
                        
                    </form>
                </div>
                
            <Footer/>
        </div>
    );
}

export default Genero;