import React from "react";
import "../components/layout/StarWars.css"
import "../components/layout/StarWars.scss"
import logo1 from "../components/layout/img/imageedit_26_8168761286.png"
import logo2 from "../components/layout/img/imageedit_19_9868270725.png"
import logo3 from "../components/layout/img/imageedit_5_6668686561.png"

interface IStar {
    name: string;
}

interface IState{
    people: IStar[],
    nome: string;
}

interface IProps {}

class Star extends React.Component<IProps, IState> {
  timeout: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            people: [],
            nome: ""  
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event: any) {
        event.preventDefault();
        this.setState({nome: event.target.value});
        if (this.state.nome !== ""){
        this.timeout = setTimeout(() => {
        this.getPeopleStars()
        }, 1000);} 
      }

    getPeopleStars = async() => {
        let nomePer = this.state.nome;
        const response = await fetch(`https://swapi.co/api/films/?search=${nomePer}`);
        const allStar = await response.json();
        
        this.setState({ people: allStar.results});
    }

    render(){
      let toggle = 'toggle';
      let cont = 1;
        return(
            <div className="stars-container">

                <div className="divimg1"><img className="img1" src={logo1} alt=""/>{/*<img className="img2" src={logo3} alt=""/>/*}
                {/* <div className="divimg2"></div> */}
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
          
                    {this.state.people.map((people: any) => {
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

export default Star;

