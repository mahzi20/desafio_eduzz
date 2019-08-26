import React from 'react'
import * as ReactRedux from 'react-redux'
import '../components/layout/StarWars.css'
import '../components/layout/StarWars.scss'
import logo1 from '../components/layout/img/imageedit_26_8168761286.png'
import { IAppState } from '../redux/configureStore'
import { getStars } from '../redux/reducers/starsReducer'
import loading from '../components/layout/img/Spinner-1s-200px.svg'

interface IDispatchProps {
    getStars: (nome: string) => void
}

interface IProps {
    starsInfo: []
    fetching: boolean
    getStars: (nome: string) => void
}

class Star extends React.Component<IProps> {
    timeout: any = null

    state = {
        nome: '',
    }

    handleChange = (event: any) => {
        event.preventDefault()
        this.setState({ nome: event.target.value })

        this.timeout = setTimeout(() => {
            if (this.props.fetching === false) {
                this.getMovies()
            }
        }, 1500)
    }

    getMovies = async () => {
        const { nome } = this.state
        this.props.getStars(nome)
    }

    render() {
        let toggle = 'toggle'
        return (
            <div className="stars-container">
                <div className="divimg1">
                    <img className="img1" src={logo1} alt="" />
                </div>

                <div>
                    <input
                        className="valorPesquisa"
                        type="text"
                        value={this.state.nome}
                        onChange={this.handleChange}
                        placeholder="Search by movie name"
                    />
                </div>
                {this.props.fetching ? (
                    <img className="loading" src={loading} alt="" />
                ) : (
                    <div className="accordion">
                        {this.props.starsInfo.map((films: any, key: number) => {
                            return (
                                <div className="option" key={key}>
                                    <input
                                        type="checkbox"
                                        id={toggle + key}
                                        className="toggle"
                                    />
                                       {' '}
                                    <label
                                        className="title"
                                        htmlFor={toggle + key}
                                    >
                                        {films.title}
                                    </label>
                                    <div className="content">
                                        <p>Sinopse: {films.opening_crawl}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        starsInfo: store.starsInfo,
        fetching: store.isFetching,
    }
}

const mapDispatchToProps: IDispatchProps = {
    getStars,
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Star)
