import './Form.scss';
import { useState } from 'react';
import CardPreview from '../cardPreview/CardPreview.js';

import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function Form() {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const years = ['2022', '2023', '2024', '2025', '2026', '2027'];

  const [showCardBack, setshowCardBack] = useState(false);

  const [card, setCardInfo] = useState({
    exMonth: '',
    exYear: '',
    cvv: '',
    number: '',
    name: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCardInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClick = (event) => {
    if (event.target.name === 'cvv') {
      setshowCardBack(true);
    } else {
      setshowCardBack(false);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('current state: ', card);
  }

  return (
    <div className="card-form-container">
      <CardPreview card={card} showCardBack={showCardBack} />
      <Card className="checkout-form">
        <div className="form-input-container">
          <FormControl id="card-number-formControl">
            <TextField
              required
              id="card-number-select"
              value={card.number}
              name='number'
              type='number'
              label="Card Number"
              onClick={handleClick}
              onChange={handleChange}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16);
              }} 
            />
          </FormControl>
          <FormControl id="card-name-formControl">
            <TextField
              required
              id="card-name-select"
              value={card.name}
              name='name'
              label="Card Name"
              onClick={handleClick}
              onChange={handleChange}
              inputProps={{
                maxLength: 50,
              }}
            />
          </FormControl>
          <FormLabel id="ex-date-lable">Expiration Date</FormLabel>
          <div className="ex-cvv-div">
            <FormControl id="ex-month-formControl">
              <InputLabel id="ex-month-select-label">Month</InputLabel>
              <Select
                required
                id="ex-month-select"
                value={card.exMonth}
                name='exMonth'
                label="expiration-month"
                onClick={handleClick}
                onChange={handleChange}
                MenuProps={MenuProps}
              >
                {months.map((month, idx) => (
                  <MenuItem key={idx} value={month}>{month}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl id="ex-year-formControl">
              <InputLabel id="ex-year-select-label">Year</InputLabel>
              <Select
                required
                id="ex-year-select"
                value={card.exYear}
                name='exYear'
                label="expiration-year"
                onClick={handleClick}
                onChange={handleChange}
              >
                {years.map((year, idx) => (
                  <MenuItem key={idx} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl id="cvv-formControl">
              <TextField
                required
                id="cvv-select"
                value={card.cvv}
                name='cvv'
                type='number'
                label="CVV"
                onClick={handleClick}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
                }} 
              />
            </FormControl>
          </div>
          <Button
            id="submit-button"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Form;