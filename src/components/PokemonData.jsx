import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function PokemonData(props){

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} lg={8} xxl={6}>
                        <Card className="card-pokemon">
                            <div className="card-header">
                                <h5 className="card-title">{props.name}</h5>
                                <img src={props.sprite} alt={props.name} className="card-img" />
                            </div>
                            <div className="card-body">   
                                <div className="card-info">
                                    <div className="card-ability">
                                        <h5 className="card-subtitle">Ability</h5>
                                        { props.abilities.map((ability, key) => (
                                            <div key={key}>
                                                {ability.ability.name}
                                            </div>
                                        ))}
                                    </div>                               
                                    <div className="card-types">
                                        <h5  className="card-subtitle">Types</h5>
                                        <div className="card-types-wrapper">
                                        {props.types.map((type, key) => (
                                            <div key={key} class={type.type.name}>
                                                {type.type.name}
                                            </div>
                                        ))}
                                        </div>
                                       
                                    </div>
                                </div>                         
                                
                                <div className="card-base-stats">
                                    <h5  className="card-subtitle">Base Stats</h5>
                                    {props.stats.map((stat, key) => (
                                        <div key={key} className="mb-2">
                                            <span className="mb-1 d-inline-block">{stat.stat.name}</span>
                                            <ProgressBar now={stat.base_stat} max="255" label={stat.base_stat}/>
                                        </div>
                                    ))}
                                </div>
                            </div>                           
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}