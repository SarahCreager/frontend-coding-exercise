import './CardPreview.scss';
// import CardMedia from '@mui/material/CardMedia';
import cardFrontPreview from '../../assets/cardFront.jpeg';
import cardBackPreview from '../../assets/cardBack.jpg';
import chip from '../../assets/chip.png';
import visa from '../../assets/visa.png';


function CardPreview(props) {
  const { name, exMonth, exYear, cvv, number } = props.card;
  const { showCardBack } = props;

  return (
    <>
      <div className={'card-container' + (showCardBack ? ' flipped' : '')}>
        <div className="card-front">
          <img id="card-chip" src={chip} alt="chip" />
          <img id="card-visa" src={visa} alt="visa" />

          <h3 id="card-number">
            {number ? number.length < 13  ? `${number.slice(0, 4)} **** **** ****` : `${number.slice(0, 4)} **** **** ${number.slice(12)}` : '**** **** **** ****'}
          </h3>
          <h5 id="card-name-title">Card Holder</h5>
          <h4 id="card-name-input">{name ? name : 'Your Name Here'}</h4>
          <div id="ex-preview-container">
            <h5 id="expires-title">Expires</h5>
            <h5 id="expiration-input">{`${exMonth}/${exYear.slice(2)}`}</h5>
          </div>
          <img id="card-front-media" src={cardFrontPreview} alt='card-front-img' />
        </div>
        <div className="card-back">
          <h4 id="cvv">{cvv}</h4>
          <img id="card-back-media" src={cardBackPreview} alt='card-back-img' />
        </div>
      </div>
    </>
  );
}

export default CardPreview;