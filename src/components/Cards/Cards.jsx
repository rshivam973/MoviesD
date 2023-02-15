import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import "./Cards.css"
import { get } from 'jquery';



function Cards(props) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
      <div className='card-container'>
        <Card className="main-card" style={{ width: '15rem', flex: 1}}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
              {props.releaseDate}
              <br/>Rating: {props.rating}
              </Card.Text>
              <Button variant="primary">External Link</Button>
            </Card.Body>
          </Card>

      </div>
  );
}

export default Cards;


