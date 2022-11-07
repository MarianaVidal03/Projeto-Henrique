import React from "react";
import axios from 'axios';
import SectionTable from "views/index-sections/SectionTable";
import SectionRows from "views/index-sections/SectionRows";
import SectionForm from "views/index-sections/SectionForm";
import SectionTitle from "views/index-sections/SectionTitle";
import SectionImageNew from "views/index-sections/SectionImageNew"
import SectionCarousel from "views/index-sections/SectionCarousel";


const baseUrl = 'http://localhost:3000/clothes'
const initState = {
    clothes: { id: '', price: '', name: '', description: '', image: '', color: '', model: '', size: '' },
    list: []
    
}


export default class Clothes extends React.Component {
    state = { ...initState  }
    
    /**Chamada quando o elemento for exibido na tela */
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data }) /**salvamos dentro da lista as requisições */
        })
    }
    /*Limpar Formulário*/
    clear() {
        this.setState({ clothes: initState.clothes })
    }
    save() {
        const clothes = this.state.clothes
        /*put: alteração. O usuário já deve existir. post: cria usuário. envia dados do formulário */
        const method = clothes.id ? 'put' : 'post'
        const url = clothes.id ? `${baseUrl}/${clothes.id}` : baseUrl
        /**requisição ajax enviando como parametro url e clothes
         * rsp.data é o resultado obtido do webservice
         */
        axios[method](url, clothes)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ clothes: initState.clothes, list })
            })
    }
    getUpdateList(clothes) {
        /**O filter gera, por padrão, outra lista. Por esse motivo não se usa o clone
         *O clone é para evitar adulterar o estado inicial do objeto
         *A lista é criada a partir de roupas que tem o id diferente daqueles que já existirão na lista2
         *ou seja, aqui nós removemos as roupas da lista1 ordenando-a na lista2.
         */
        const list = this.state.list.filter(u => u.id !== clothes.id) /**removendo a roupa da lista */
        list.unshift(clothes)/** inserindo na primeira posição do array */
        return list
    }
    updateField(event) {
        const clothes = { ...this.state.clothes }
        clothes[event.target.name] = event.target.value /**em target pegamos o conteúdo do input name */
        this.setState({ clothes })
    }
    /**edição */
    load(clothes) {
        this.setState({ clothes }) /**atualiza o estado da aplicação */
    }
    remove(clothes) {
        axios.delete(`${baseUrl}/${clothes.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== clothes) /**procurar a roupa na lista por u */
            /**ao encontrar a roupa atualiza estado da lista com a roupa removida */
            this.setState({ list })
        })
    }
    /**list users */
    rendertable() {
        return (
            <SectionTable
                th1="Cor"
                th2="Modelo"
                th3="Tamanho"
                rend={this.renderows()}
            />
        );
    }
    renderows() {
        /**mapeando roupas que estão no estado do objeto */
        return this.state.list.map(clothes => {
            return (
                <SectionRows

                    id={clothes.id}
                    price={clothes.price}
                    name={clothes.name}
                    description={clothes.description}
                    image={clothes.image}
                    color={clothes.color}
                    item2={clothes.model}
                    item3={clothes.size}
                    click1={() => this.load(clothes)}
                    click2={() => this.remove(clothes)}
                />
            );
        });
    }
    renderForm() {
        /**jsx que irá renderizar o formulário */
        return (
            <SectionForm
                title1="Cadastro de Roupas"
                onchange={e => this.updateField(e)}
                value1={this.state.clothes.name}
                value2={this.state.clothes.price}
                value3={this.state.clothes.description}
                value4={this.state.clothes.image}
                label1="Cor"
                value5={this.state.clothes.color}
                nam="color"
                place="Digite a cor"
                label2="Modelo"
                value6={this.state.clothes.model}
                place2="Digite o modelo"
                salvar={e => this.save(e)}
                cancelar={e => this.clear(e)}
                label3="Tamanho"
                value7={this.state.clothes.size}
                place3="Digite o tamanho"
            />
        );
    }
    render() {
        return (
            <div>
                <SectionTitle
                    title="Cadastro de Roupas"
                />
                <SectionCarousel />
                <SectionImageNew
                    img1="https://img.abercrombie.com/is/image/anf/KIC_139-2303-1023-100_model1?$product-medium-anf$"
                    img2="https://img.abercrombie.com/is/image/anf/KIC_159-2504-3224-900_model1?$product-medium-anf$"
                    img3="https://img.abercrombie.com/is/image/anf/KIC_143-2510-1692-418_model1?$product-medium-anf$"
                />
                {this.renderForm()}
                {this.rendertable()}
            </div>
        )
    }
}
