import React ,{ useState } from 'react';
import { Form, Container, Col, Button, Row } from 'react-bootstrap';



export default function Search(props){

    const [search, setSearch] = useState('');

    return (

       <Container>
            <h1 className="headline">Search Pokémon</h1>
            <Form className="form-search">
                <Form.Group as={Row} className="align-items-center justify-content-center">
                    <Col sm={8} md={9} lg={8} xl={6}>
                        <Form.Control 
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for Pokemon" />
                    </Col>
                    <Col sm={4} md={3} lg={2}>
                        <Button className="btn-search" onClick={(e) => props.getPokemon(search)}>Search</Button>
                    </Col>
                </Form.Group >
            </Form>
       </Container>
    )
}
