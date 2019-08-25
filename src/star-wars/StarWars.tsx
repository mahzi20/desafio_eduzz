import React from "react";
import * as ReactRedux from 'react-redux';
import store from '../redux/configureStore'
import "../components/layout/StarWars.css"
import "../components/layout/StarWars.scss"
import logo1 from "../components/layout/img/imageedit_26_8168761286.png"

import { getStars } from "../redux/reducers/starsReducer"

interface IDispatchProps {
  getStars: (nome: string) => void;
}

interface IStar {
    name: string;
}

interface IState{
    starInfo: IStar[],
    nome: string;
}

interface IProps {
  getStars: (nome: string) => void;
}

class Star extends React.Component<IProps, IState> {
  timeout: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            starInfo: [],
            nome: ""  
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event: any) {
        event.preventDefault();
        this.setState({nome: event.target.value});
        if (this.state.nome !== ""){
          this.timeout = setTimeout(() => {
            this.getMovies()
          }, 2000)} 
      }

    getMovies = async() => {
        const {nome} = this.state;
        this.props.getStars(nome);
    }

    render(){
      let toggle = 'toggle';
      let cont = 1;
        return(
            <div className="stars-container">
              <div className="divimg1"><img className="img1" src={logo1} alt=""/>
              </div>
                
              <div>
                <input className="Personagem"
                        type="text"
                        value= {this.state.nome}
                        onChange= {this.handleChange}
                        placeholder="Search by movie name"
                />
              </div>
              <div className="accordion">
                    {this.state.starInfo.map((people: any) => {
                        return (
                          
                          <div className="option" key={people.key}> 
                          {cont++}           
                          <input type="checkbox" id={toggle + cont} className="toggle" />
                          <label className="title" htmlFor={toggle + cont}>{people.title}</label>
                            <div className="content">
                              <p>Ano de lançamento: {people.release_date}</p>
                              
                            </div>
                          </div>
                        );
                    })}
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (store: IState) => {
  return {
    starsReducer: store.starInfo
  }
};

const mapDispatchToProps: IDispatchProps = {
  getStars
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Star);

