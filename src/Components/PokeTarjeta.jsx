import {useState,useEffect} from 'react'
import axios from 'axios'
import {Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Badge} from 'reactstrap';
import { Link } from 'react-router-dom'
export const PokeTarjeta = (params) => {
  const [pokemon, setPokemon] = useState([]);
  const [imagen, setImagen] = useState('');
  const [cardClass, setCardClass] = useState('d-none');
  const [loadClass, setLoadClass] = useState('');

  useEffect(() => {
    getPokemon()
  },[])

  const getPokemon= async () => {
    const liga =params.poke.url;
    axios.get(liga).then(
      async(response) => {
        const respuesta=response.data;
        setPokemon(respuesta)
        
      }
    )
  }

  return (
    <Col sm='4' lg='3' className='mb-3'>
      <Card>
        <CardImg top width="100%" src={pokemon.sprites?.front_default} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{pokemon.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Tipo</CardSubtitle>
          <Badge pill color='danger'>#{pokemon.id} </Badge>
          {pokemon.types?.map((tipo, index) => {
            return (
              <Badge key={index} color="info" className='mr-1'>{tipo.type.name}</Badge>
            )
          })}
          <CardText>
            <Button onClick={() => {setCardClass(''); setLoadClass('d-none')}}>Ver detalle</Button>
          </CardText>
          <CardText className={cardClass}>
            <small className="text-muted">Altura: {pokemon.height}</small>
            <br/>
            <small className="text-muted">Peso: {pokemon.weight}</small><br />
            <Link to={`/pokemon/${pokemon.name}`}
             className='btn btn-danger'
             ><i className='fa-solid fa-arrow-up-right-from-square'></i>Ver mas</Link>
          </CardText>


        </CardBody>
      </Card>

    
    </Col>
  )
}
