import React from "react";
import axios from 'axios';
import SectionTable from "views/index-sections/SectionTable";
import SectionRows from "views/index-sections/SectionRows";
import SectionForm from "views/index-sections/SectionForm";
import SectionTitle from "views/index-sections/SectionTitle";
import SectionImageNew from "views/index-sections/SectionImageNew"
import SectionCarouselBook from "views/index-sections/SectionCarouselBook";
import SectionFormBook from "views/index-sections/SectionFormBook";
import SectionRowsBook from "views/index-sections/SectionRowsBook";
import SectionTableBook from "views/index-sections/SectionTableBook";


const baseUrl = 'http://localhost:3000/book'
const initState = {
    book: { id: '', price: '', name: '', description: '', image: '', ISBN: '', typeCover: '', dimension: '' },
    list: []
}

export default class Books extends React.Component {
    state = { ...initState }

    /**Chamada quando o elemento for exibido na tela */
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data }) /**salvamos dentro da lista as requisições */
        })
    }
    /*Limpar Formulário*/
    clear() {
        this.setState({ book: initState.book })
    }
    save() {
        const book = this.state.book
        /*put: alteração. O usuário já deve existir. post: cria usuário. envia dados do formulário */
        const method = book.id ? 'put' : 'post'
        const url = book.id ? `${baseUrl}/${book.id}` : baseUrl
        /**requisição ajax enviando como parametro url e book
         * rsp.data é o resultado obtido do webservice
         */
        axios[method](url, book)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ book: initState.book, list })
            })
    }
    getUpdateList(book) {
        /**O filter gera, por padrão, outra lista. Por esse motivo não se usa o clone
         *O clone é para evitar adulterar o estado inicial do objeto
         *A lista é criada a partir de roupas que tem o id diferente daqueles que já existirão na lista2
         *ou seja, aqui nós removemos as roupas da lista1 ordenando-a na lista2.
         */
        const list = this.state.list.filter(u => u.id !== book.id) /**removendo a roupa da lista */
        list.unshift(book)/** inserindo na primeira posição do array */
        return list
    }
    updateField(event) {
        const book = { ...this.state.book }
        book[event.target.name] = event.target.value /**em target pegamos o conteúdo do input name */
        this.setState({ book })
    }
    /**edição */
    load(book) {
        this.setState({ book }) /**atualiza o estado da aplicação */
    }
    remove(book) {
        axios.delete(`${baseUrl}/${book.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== book) /**procurar a roupa na lista por u */
            /**ao encontrar a roupa atualiza estado da lista com a roupa removida */
            this.setState({ list })
        })
    }
    /**list users */
    rendertable() {
        return (
            <SectionTableBook
                rend={this.renderows()}
            />
        );
    }
    renderows() {
        /**mapeando roupas que estão no estado do objeto */
        return this.state.list.map(book => {
            return (
                <SectionRowsBook
                    id={book.id}
                    price={book.price}
                    name={book.name}
                    description={book.description}
                    image={book.image}
                    ISBN={book.ISBN}
                    typeCover={book.typeCover}
                    dimension={book.dimension}
                    click1={() => this.load(book)}
                    click2={() => this.remove(book)}
                />
            );
        });
    }
    renderForm() {
        /**jsx que irá renderizar o formulário */
        return (
            <SectionFormBook
                title1="Cadastro de Livro"
                onchange={e => this.updateField(e)}
                value1={this.state.book.name}
                value2={this.state.book.price}
                value3={this.state.book.description}
                value4={this.state.book.ISBN}
                value5={this.state.book.typeCover}
                value6={this.state.book.dimension}
                value7={this.state.book.image}
                salvar={e => this.save(e)}
                cancelar={e => this.clear(e)}
            />
        );
    }
    render() {
        return (
            <div>
                <SectionTitle
                    title="Cadastro de Livros"
                />
                <SectionCarouselBook />
                <div className="d-flex justify-content-center items-center-align">
                    <SectionImageNew
                        img1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV1Z_ZXW5ubgopgPppphhkCvJB9M077nRDkw&usqp=CAU"
                        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJjAoPI8EF4nS2dPIMFp8xCRTtB2RbJvJ6bQ&usqp=CAU"
                        img3="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwK9LdUVtxN92aMwwKwFvzDSxTFtXxbwHxE8mPetGEOmsZWlvwoeG2dR248utMaCZRFL_zQA&usqp=CAc"
                    />
                </div>
                {this.renderForm()}
                {this.rendertable()}
            </div>
        )
    }
}
