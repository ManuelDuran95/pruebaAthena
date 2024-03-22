import{Container,Row,Col,Card,Button} from 'reactstrap';
import axios from 'axios';
import { PokeTarjeta } from '../Components/PokeTarjeta';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Detalle = () => {
  const {id} = useParams();
  useEffect(() => {
    console.log(id)
  },[])
  return (
    <div>Detalle</div>
  )
}
