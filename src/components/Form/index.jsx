import Input from "../Input";
import styles from '../Form/Form.module.css'
import { useEffect, useState } from 'react'

const Form = () => {
  const [nome, setNome]= useState('')
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)
  const [classificacao, setClassificacao] = useState(0)

  useEffect(() => {
    const alturaEmMetros = altura / 100
    const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2)
    setImc(imc)

    let classificacao = ''

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }

    setClassificacao(classificacao)
  }, [nome, peso, altura])

  return(
    <>
    <form className={styles.container}>

      <h1>Saiba seu IMC</h1>


      <Input 
        placeholder="Digite seu peso" 
        onChange={e => setPeso(parseInt(e.target.value))}
      />
      
      <Input 
        placeholder="Digite sua altura em 'cm'" 
        onChange={e => setAltura(parseInt(e.target.value))}
      />

      <Input 
        placeholder="Digite seu nome" 
        onBlur={e => setNome(e.target.value)}
      />

      {nome ? (
        <p className={styles.resultado}>
          {`${nome} seu imc é: ${imc}, e você está na classificação de ${classificacao}`}
        </p>
      ) : ""}
    </form>
    </>

    
  )
}

export default  Form