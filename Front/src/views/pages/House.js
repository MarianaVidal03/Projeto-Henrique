import React from "react";
import axios from 'axios';
import SectionTable from "views/index-sections/SectionTable";
import SectionRows from "views/index-sections/SectionRows";
import SectionForm from "views/index-sections/SectionForm";
import SectionTitle from "views/index-sections/SectionTitle";
import SectionImageNew from "views/index-sections/SectionImageNew"
import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionCarouselHouse from "views/index-sections/SectionCarouselHouse";
import SectionTableHouse from "views/index-sections/SectionTableHouse";
import SectionRowsHouse from "views/index-sections/SectionRowsHouse";
import SectionFormHouse from "views/index-sections/SectionFormHouse";


const baseUrl = 'http://localhost:3000/house'
const initState = {
    house: { id: '', price: '', name: '', description: '', image: '', model: '', dimension: '' },
    list: []
}

export default class House extends React.Component {
    state = { ...initState }

    /**Chamada quando o elemento for exibido na tela */
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data }) /**salvamos dentro da lista as requisições */
        })
    }
    /*Limpar Formulário*/
    clear() {
        this.setState({ house: initState.house })
    }
    save() {
        const house = this.state.house
        /*put: alteração. O usuário já deve existir. post: cria usuário. envia dados do formulário */
        const method = house.id ? 'put' : 'post'
        const url = house.id ? `${baseUrl}/${house.id}` : baseUrl
        /**requisição ajax enviando como parametro url e house
         * rsp.data é o resultado obtido do webservice
         */
        axios[method](url, house)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ house: initState.house, list })
            })
    }
    getUpdateList(house) {
        /**O filter gera, por padrão, outra lista. Por esse motivo não se usa o clone
         *O clone é para evitar adulterar o estado inicial do objeto
         *A lista é criada a partir de roupas que tem o id diferente daqueles que já existirão na lista2
         *ou seja, aqui nós removemos as roupas da lista1 ordenando-a na lista2.
         */
        const list = this.state.list.filter(u => u.id !== house.id) /**removendo a roupa da lista */
        list.unshift(house)/** inserindo na primeira posição do array */
        return list
    }
    updateField(event) {
        const house = { ...this.state.house }
        house[event.target.name] = event.target.value /**em target pegamos o conteúdo do input name */
        this.setState({ house })
    }
    /**edição */
    load(house) {
        this.setState({ house }) /**atualiza o estado da aplicação */
    }
    remove(house) {
        axios.delete(`${baseUrl}/${house.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== house) /**procurar a roupa na lista por u */
            /**ao encontrar a roupa atualiza estado da lista com a roupa removida */
            this.setState({ list })
        })
    }
    /**list users */
    rendertable() {
        return (
            <SectionTableHouse
                rend={this.renderows()}
            />
        );
    }
    renderows() {
        /**mapeando roupas que estão no estado do objeto */
        return this.state.list.map(house => {
            return (
                <SectionRowsHouse
                    title1="Cadastro Decoração de Casa"
                    id={house.id}
                    price={house.price}
                    name={house.name}
                    description={house.description}
                    image={house.image}
                    model={house.model}
                    dimension={house.dimension}
                    click1={() => this.load(house)}
                    click2={() => this.remove(house)}
                />
            );
        });
    }
    renderForm() {
        /**jsx que irá renderizar o formulário */
        return (
            <SectionFormHouse
                title1="Cadastro Decoração de Casa"
                onchange={e => this.updateField(e)}
                value1={this.state.house.name}
                value2={this.state.house.price}
                value3={this.state.house.description}
                value4={this.state.house.model}
                value5={this.state.house.dimension}
                value6={this.state.house.image}
                place2="Digite o modelo"
                salvar={e => this.save(e)}
                cancelar={e => this.clear(e)}
                label3="Dimensão"
                value7={this.state.house.dimension}
                place3="Digite a dimensão"
            />
        );
    }
    render() {
        return (
            <div>
                <SectionTitle
                    title="Cadastro Decoração de Casa"
                />
                <SectionCarouselHouse />
                <div className="d-flex justify-content-center items-center-align">
                    <SectionImageNew
                        img1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJa-pFPBXRgnqNctHywUUHuo4GqejnpyZ5OE-3Hl0ypjfQLppox_JDgsnez5A&usqp=CAc"
                        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs9F0e_SdpNhiky1d_SeFCaWttxMDWOJ3PY50KiEXIpEHDPU52NE8oJraT5g&usqp=CAc"
                        img3="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUHDHAnFuusl60RbHHiTjgVsITGZRw89ROg5S8sjzVRjYj8NfqeDYYfvRJUQ&usqp=CAc"
                    />
                </div>
                {this.renderForm()}
                {this.rendertable()}
            </div>
        )
    }
}
