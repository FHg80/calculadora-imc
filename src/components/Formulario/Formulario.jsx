import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const imc = peso/altura;
    
    return (
        <div>
            <form className={styles.formulario}>
                <input className={styles.input} required id="altura" name="altura" type="number" onChange={e => setAltura(e.target.value)} placeholder="Digite sua Altura (ex. 1.82m)"/>
                <input className={styles.input} required id="peso" name="peso" type="number" onChange={e => setPeso(e.target.value)} placeholder="Digite seu Peso (ex. 70Kg)"/>
            </form>
            {altura != 0 && peso != 0 && (
                <>
                    <h3 className={styles.resultado}>Seu IMC é:</h3>
                    <h3 className={styles.resultado}>{imc}</h3>
                </>
                )}
        </div>
    )
}

export default Formulario;