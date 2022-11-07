import React from "react";
import axios from 'axios';
import SectionFormKitchen from "views/index-sections/SectionFormKitchen";
import SectionTitle from "views/index-sections/SectionTitle";
import SectionImageNew from "views/index-sections/SectionImageNew"
import SectionCarouselKitchen from "views/index-sections/SectionCarouselKitchen";
import SectionTableKitchen from "views/index-sections/SectionTableKitchen";
import SectionRowsKitchen from "views/index-sections/SectionRowsKitchen";


const baseUrl = 'http://localhost:3000/kitchen'
const initState = {
    kitchen: { id: '', price: '', name: '', description: '', image: '', model: '', dimension: '', volume: '', amount: '' },
    list: []
}

export default class Kitchen extends React.Component {
    state = { ...initState }

    /**Chamada quando o elemento for exibido na tela */
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data }) /**salvamos dentro da lista as requisições */
        })
    }
    /*Limpar Formulário*/
    clear() {
        this.setState({ kitchen: initState.kitchen })
    }
    save() {
        const kitchen = this.state.kitchen
        /*put: alteração. O usuário já deve existir. post: cria usuário. envia dados do formulário */
        const method = kitchen.id ? 'put' : 'post'
        const url = kitchen.id ? `${baseUrl}/${kitchen.id}` : baseUrl
        /**requisição ajax enviando como parametro url e kitchen
         * rsp.data é o resultado obtido do webservice
         */
        axios[method](url, kitchen)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ kitchen: initState.kitchen, list })
            })
    }
    getUpdateList(kitchen) {
        /**O filter gera, por padrão, outra lista. Por esse motivo não se usa o clone
         *O clone é para evitar adulterar o estado inicial do objeto
         *A lista é criada a partir de roupas que tem o id diferente daqueles que já existirão na lista2
         *ou seja, aqui nós removemos as roupas da lista1 ordenando-a na lista2.
         */
        const list = this.state.list.filter(u => u.id !== kitchen.id) /**removendo a roupa da lista */
        list.unshift(kitchen)/** inserindo na primeira posição do array */
        return list
    }
    updateField(event) {
        const kitchen = { ...this.state.kitchen }
        kitchen[event.target.name] = event.target.value /**em target pegamos o conteúdo do input name */
        this.setState({ kitchen })
    }
    /**edição */
    load(kitchen) {
        this.setState({ kitchen }) /**atualiza o estado da aplicação */
    }
    remove(kitchen) {
        axios.delete(`${baseUrl}/${kitchen.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== kitchen) /**procurar a roupa na lista por u */
            /**ao encontrar a roupa atualiza estado da lista com a roupa removida */
            this.setState({ list })
        })
    }
    /**list users */
    rendertable() {
        return (
            <SectionTableKitchen
                rend={this.renderows()}
            />
        );
    }
    renderows() {
        /**mapeando roupas que estão no estado do objeto */
        return this.state.list.map(kitchen => {
            return (
                <SectionRowsKitchen
                    id={kitchen.id}
                    price={kitchen.price}
                    name={kitchen.name}
                    description={kitchen.description}
                    image={kitchen.image}
                    model={kitchen.model}
                    dimension={kitchen.dimension}
                    volume={kitchen.volume}
                    amount={kitchen.amount}
                    click1={() => this.load(kitchen)}
                    click2={() => this.remove(kitchen)}
                />
            );
        });
    }
    renderForm() {
        /**jsx que irá renderizar o formulário */
        return (
            <SectionFormKitchen
                title1="Cadastro de Utensílios para Cozinha"
                onchange={e => this.updateField(e)}
                value1={this.state.kitchen.name}
                value2={this.state.kitchen.price}
                value3={this.state.kitchen.description}
                value4={this.state.kitchen.model}
                value5={this.state.kitchen.dimension}
                value6={this.state.kitchen.volume}
                value7={this.state.kitchen.amount}
                value8={this.state.kitchen.image}
                salvar={e => this.save(e)}
                cancelar={e => this.clear(e)}
                label3="Tamanho"
                value7={this.state.kitchen.size}
                place3="Digite o tamanho"
            />
        );
    }
    render() {
        return (
            <div>
                <SectionTitle
                    title="Cadastro de Utensílios para Cozinha"
                />
                <SectionCarouselKitchen />
                <SectionImageNew
                    img1="https://blog.mobly.com.br/wp-content/uploads/2019/08/decoracao-de-cozinha-pequena-cor-ideal2.jpg"
                    img2="https://blog.mobly.com.br/wp-content/uploads/2019/08/decoracao-de-cozinha-pequena-decor-funcional.jpg"
                    img3="https://blog.mobly.com.br/wp-content/uploads/2019/08/decoracao-de-cozinha-pequena-a-persona2.jpg"
                />
                {this.renderForm()}
                {this.rendertable()}
            </div>
        )
    }
}
