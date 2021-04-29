const dados = [
  {
    image: "../assets/ibis01.jpg",
    nome: "IBIS Styles São Paulo Anhembi",
    descricao: "Ao lado de uma estação de metrô, este hotel moderno com tema de aviação fica a 3 km da Pinacoteca do Estado de São Paulo e a 4,4 km do Theatro Municipal de São Paulo.",
    avaliacaoMedia: "5/5",
    distanciaPaulista: "7,4km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14633.86334172865!2d-46.6256485!3d-23.5157421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1128b91971707df1!2sibis%20Styles%20S%C3%A3o%20Paulo%20Anhembi!5e0!3m2!1spt-BR!2sbr!4v1619635026988!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/confort01.jpg",
    nome: "Comfort Ibirapuera",
    descricao: "Situado em frente à Praça Nossa Senhora Aparecida, uma praça pública com uma basílica ornamentada, este hotel moderno e informal fica a 4 km da Estação Ferroviária de Vila Olímpia e do Aeroporto de Congonhas em São Paulo.",
    avaliacaoMedia: "5/5",
    distanciaPaulista: "6,4km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0425866356204!2d-46.66420988502128!3d-23.60280558466228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a051ffd212f%3A0xdef750ee62ca41bb!2sComfort%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1619661156463!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/blue01.jpg",
    nome: "Blue Tree Premium Morumbi",
    descricao: "Localizado a 2 minutos de caminhada do Morumbi Shopping, este hotel refinado em um arranha-céu grandioso também está a 6 km do Aeroporto de Congonhas e a 8 km do Parque Ibirapuera.",
    avaliacaoMedia: "4/5",
    distanciaPaulista: "9,6km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4821755847215!2d-46.698668185021106!3d-23.62289718465239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50c383442dfb%3A0xdd07ed725d00a38e!2sBlue%20Tree%20Premium%20Morumbi!5e0!3m2!1spt-BR!2sbr!4v1619661240702!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/mercure01.jpg",
    nome: "Mercure São Paulo Pamplona",
    descricao: "Hotel refinado em um arranha-céu que fica localizado a 12 minutos de caminhada de uma estação de metrô, a 1 km do Museu de Arte de São Paulo e a 3,7 km do Parque Ibirapuera.",
    avaliacaoMedia: "4/5",
    distanciaPaulista: "1,3km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.997658331254!2d-46.66033128502209!3d-23.5685275846794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c454ef9fcd%3A0xb8a3a403a40e5c4!2sMercure%20Sao%20Paulo%20Pamplona%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1619661344235!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/sheraton01.jpg",
    nome: "Sheraton São Paulo WTC Hotel",
    descricao: "Situado a 2 minutos de caminhada do WTC – World Trade Center São Paulo – este hotel de luxo está a 9 minutos a pé da estação do metrô e a 9 km do Parque Ibirapuera.",
    avaliacaoMedia: "3/5",
    distanciaPaulista: "9,9km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.86599560538!2d-46.6984308850212!3d-23.609138384659083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50c39b566d85%3A0xdef17ec1a62a235d!2sSheraton%20S%C3%A3o%20Paulo%20WTC%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1619661387473!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/bourbon01.jpg",
    nome: "Bourbon Convention Ibirapuera",
    descricao: "Este hotel de convenções moderno, dividido entre duas torres, fica a três quilômetros do Parque Ibirapuera e a sete quilômetros do Museu de Arte de São Paulo.",
    avaliacaoMedia: "2/5",
    distanciaPaulista: "8,7km da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8818835992492!2d-46.66879868502138!3d-23.60856868465944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a08c3b44cb7%3A0x988947deddbd766!2sBourbon%20Convention%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1619661428551!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/blueTree01.jpg",
    nome: "Blue Tree Preimum Paulista",
    descricao: "Este hotel moderno com fachada de vidro fica a cinco minutos a pé do Museu de Arte de São Paulo e a quatro quilômetros do Parque Ibirapuera.",
    avaliacaoMedia: "2/5",
    distanciaPaulista: "850m da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2272675312142!2d-46.65813348502213!3d-23.560279784683328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc06495c71%3A0xcc0f48b9437fc214!2sBlue%20Tree%20Premium%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1619661462862!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/golden01.jpg",
    nome: "Golden Tulip Paulista Plaza",
    descricao: "Este hotel moderno e sofisticado está a uma caminhada de 6 minutos de uma estação de metrô, a 500 metros da agitada Avenida Paulista e a 3,1 km do Parque Ibirapuera.",
    avaliacaoMedia: "2/5",
    distanciaPaulista: "500m da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.904050758164!2d-46.64856508502193!3d-23.57188928467769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5996048af781%3A0x9856d09e924a4d99!2sRadisson%20Hotel%20Paulista%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1619661504453!5m2!1spt-BR!2sbr"
  },
  {
    image: "../assets/renaissance01.jpg",
    nome: "Renaissance São Paulo Hotel",
    descricao: "Hotel sofisticado situado em uma rua comercial. Fica a 3 minutos a pé de uma estação de metrô e a 4 minutos a pé das lojas de luxo da movimentada Avenida Paulista.",
    avaliacaoMedia: "1/5",
    distanciaPaulista: "300m da Av. Paulista",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2671695639183!2d-46.664646485022246!3d-23.55884618468416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c89e6dca17%3A0xb62609d26a3a7180!2sRenaissance%20S%C3%A3o%20Paulo%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1619661546978!5m2!1spt-BR!2sbr"
  }
]

function addCard() {
  const groupCard = document.querySelector('.groupCard')
  dados.forEach((dado)=>{
    groupCard.innerHTML += `
                            <div class="card">
                             <div class="cardHeader"><img src="${dado.image}" alt=""></div>
                              <div class="cardBody">
                                <h3>${dado.nome}</h3>
                                <div class="description">
                                  <p>${dado.descricao}</p>
                                </div>
                                <div class="assessment">
                                  <p>Avaliação média: <strong>${dado.avaliacaoMedia}</strong></p><img src="./assets/star_gray.png" alt="Estrela de avaliações">
                                </div>
                              </div>
                            </div>
                           `
  })
}
addCard()

const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const body = document.querySelector('body')
const close = document.querySelector('.close')

function openModal(index) {
  modal.innerHTML = `
                      <section class="imagesHotel">
                        <div class="imageSelected">
                          <div class="close" onClick="closeModal()">
                            <img src="./assets/x.svg" alt="Icone sair">
                          </div>
                        </div>
                      </section>
                      <section class="infosHotel">
                        <div class="descriptionModal">
                          <p>${dados[index].descricao}</p>
                        </div>
                        <div class="prices">
                          <p>Avaliação média: <strong>${dados[index].avaliacaoMedia}</strong></p>
                          <p>Média por noite: <strong>R$ 120,00</strong></p>
                        </div>
                      </section>
                      <section class="location">
                        <div>
                            <iframe src="${dados[index].location}" allowfullscreen=""></iframe>
                        </div>
                        <h2>${dados[index].distanciaPaulista}</h2>
                      </section>
                      <section class="selectHotel">
                        <div class="evaluate">
                          <h2>Avalie o hotel: </h2>
                          <p>1</p>
                          <input type="radio" name="assessment" value="1" id="">
                          <input type="radio" name="assessment" value="2" id="">
                          <input type="radio" name="assessment" value="3" id="">
                          <input type="radio" name="assessment" value="4" id="">
                          <input type="radio" name="assessment" value="5" id="">
                          <p>5</p>
                        </div>
                        <hr>
                        <div class="completeSelection">
                          <div>
                            <button type="submit">Selecionar hotel</button>
                          </div>
                        </div>
                      </section>
                    `
  modalOverlay.classList.add('active')
  body.style.overflow = 'hidden'

  const imgBack = document.querySelector('.imageSelected')
  imgBack.style.background = `url(${dados[index].image})`
  imgBack.style.backgroundSize = "cover"
  imgBack.style.backgroundPosition = "center"
}

function closeModal() {
  modalOverlay.classList.remove('active')
  body.style.overflow = 'auto'
}

cards.forEach((card, index) => {
  card.addEventListener('click', ()=>{
    openModal(index)
  })
})