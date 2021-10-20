import React from 'react';

// @Material UI
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

// @Styles.js
import { useStyles } from './styles';

// @Url's
import { server } from '../../urls/urls';
import { Link } from 'react-router-dom';

const Card = ({precio, foto, idShoe}) => {
     const classes = useStyles();
    return (
      <>
        <div className="mb-6 rounded-lg w-80 shadow-lg hover:shadow-xl transition duration-500">
          <div className="rounded-lg flex justify-center items-center">
            <div className="rounded-t-lg h-60 w-full flex justify-center items-center overflow-hidden">
              <img className="" src={`${server}${foto}`} alt="" />
            </div>
          </div>
          <div className="pt-2 pb-4 px-4 h-32">
            <div>
              <h1 className="text-gray-700 font-bold hover:text-gray-900 hover:cursor-pointer">
                Zapato Belen
              </h1>
              <div className="flex justify-between">
                <span>
                  <span className="text-gray-700 tracking-wide">$ 89.900</span>
                </span>
                <span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </span>
              </div>
              <div>
                <Tooltip title="Agregar al carrito" aria-label="add">
                  <Fab size="small" color="primary" className={classes.fab}>
                    <i className="fas fa-cart-arrow-down"></i>
                  </Fab>
                </Tooltip>
              </div>
              <Link to={`./productDetail/${idShoe}`}>
                ver mas...
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;