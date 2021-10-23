import React from 'react';

// @Material UI
import Fab from "@material-ui/core/Fab";
import Rating from '@mui/material/Rating';
import Tooltip from "@material-ui/core/Tooltip";

// @Styles.js
import { useStyles } from './styles';

// @Url's
import { server } from '../../urls/urls';
import { Link } from 'react-router-dom';

// @helpers
import { currency } from '../../helpers/currency';

const Card = ({precio, foto, idShoe, nombreModelo, puntaje}) => {
     const classes = useStyles();
    return (
      <>
        <div className="mb-6 rounded-lg w-80 shadow-lg hover:shadow-xl transition duration-500">
          <div className="rounded-lg flex justify-center items-center">
            <div className="rounded-t-lg h-60 w-full flex justify-center items-center overflow-hidden">
              <img className="" src={`${server}${foto}`} alt="" />
            </div>
          </div>
          <div className="pt-2 pb-4 px-4 h-36">
            <div>
              <h1 className="text-xl text-gray-700 font-bold hover:text-gray-900 hover:cursor-pointer mb-2">
                {nombreModelo}
              </h1>
              <div className="flex justify-between">
                <span className="text-gray-700 tracking-wide">{currency(precio)}</span>
                <span className="ml-16">
                  <Rating
                    name="half-rating-read"
                    defaultValue={puntaje}
                    precision={0.1}
                    readOnly
                  />
                </span>
                <span>{puntaje}</span>
              </div>
              <Link to={`./productDetail/${idShoe}`}>
                <Tooltip title="Ver más" aria-label="add">
                  <Fab size="small" color="primary" className={classes.fab}>
                    <i className="fas fa-search"></i>
                  </Fab>
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;