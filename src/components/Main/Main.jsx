import './Main.scss'
import xicara from '../../assets/about-img.jpeg'
const Main = () => {
  return (
    <section class="sobre">
      <h2>Sobre <span>Nós</span></h2>
      <div className="itens">
        <div className="cafe-xicara">
          <img src={xicara} alt="" />
        </div>
        <div className="nossa-descricao">
          <h3>O que Faz o Nosso Café especial</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum minus libero modi? Error magnam fuga iste saepe eveniet voluptas quo quia nesciunt ex aliquid magni velit est, mollitia vero?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia provident laudantium eius, autem cum facere aperiam ipsam excepturi eum doloribus voluptas culpa iusto expedita minima beatae libero fuga suscipit.</p>
          <button>Saiba Mais</button>
        </div>
        <div className="vazio">
          
        </div>
      </div>
    </section>
  )
}

export default Main
