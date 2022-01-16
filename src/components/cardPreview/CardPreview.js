import './CardPreview.scss';
import CardMedia from '@mui/material/CardMedia';
import cardFrontPreview from '../../assets/cardFront.jpeg';
import cardBackPreview from '../../assets/cardBack.jpg';
import { When } from 'react-if';
import chip from '../../assets/chip.png';
import visa from '../../assets/visa.png';

function CardPreview(props) {
  const { name, exMonth, exYear, cvv, number } = props.card;

  return (
    <>
      <When condition={props.showCardFront}>
        <img id="card-chip" src={chip} alt="chip" />
        <img id="card-visa" src={visa} alt="visa" />
        <h3 id="card-number">
          {number ? `${number.slice(0, 4)} **** **** ${number.slice(12)}` : '**** **** **** ****'}
        </h3>
        <h5 id="card-name-title">Card Holder</h5>
        <h4 id="card-name-input">{name ? name : 'Your Name Here'}</h4>
        <div id="ex-preview-container">
          <h5 id="expires-title">Expires</h5>
          <h5 id="expiration-input">{`${exMonth}/${exYear.slice(2)}`}</h5>
        </div>
        <CardMedia
          id="card-preview-media"
          component="img"
          height="220"
          src={cardFrontPreview}
          title='card-preview'
        />
      </When>
      <When condition={!props.showCardFront}>
        <h4 id="cvv">{cvv}</h4>
        <CardMedia
          id="card-preview-media"
          component="img"
          height="220"
          src={cardBackPreview}
          title='card-back'
        />
      </When>
    </>
  );
}

export default CardPreview;