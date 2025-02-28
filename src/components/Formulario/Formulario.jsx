import { useState, useEffect } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    
    useEffect(() => {
        calculaIMC();
    }, [peso, altura, imc])
    
    
    const calculaIMC = () => {
        if(altura < 2.72 || peso < 595) {
            setImc(peso/(altura*altura));
            console.log(imc);
            if(imc < 18.5) {
                setClassificacao('Magreza');
            } else if(18.5 < imc && imc < 24.9) {
                setClassificacao('Normal');
            } else if(25.0 < imc && imc < 29.9) {
                setClassificacao('Sobrepeso');
            } else if(30.0 < imc && imc < 39.9) {
                setClassificacao('Obesidade');
            } else if(imc > 40.0) {
                setClassificacao('Obesidade Grave');
            }
        } else {
            setImc('Insira valores reais em Kg e em m');
            setClassificacao('');
        }
        
    }
    
    return (
        <div>
            <form className={styles.formulario}>
                <input className={styles.input} required id="altura" name="altura" type="number" onChange={e => setAltura(e.target.value)} placeholder="Digite sua Altura (ex. 1.82m)"/>
                <input className={styles.input} required id="peso" name="peso" type="number" onChange={e => setPeso(e.target.value)} placeholder="Digite seu Peso (ex. 70Kg)"/>
            </form>
            {altura != 0 && peso != 0 && (
                <>
                    <h3 className={styles.resultado}>Seu IMC é:</h3>
                    <h3 className={styles.resultado}>{imc.toFixed(2)}</h3>
                    <h3 className={styles.resultado}>Classificação: {classificacao}</h3>
                </>
                )}
        </div>
    )
}

export default Formulario;