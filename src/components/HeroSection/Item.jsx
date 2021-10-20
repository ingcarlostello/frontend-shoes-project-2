import React from 'react';

// @Material UI
import { Paper, Button } from "@material-ui/core";

// @Url's
import { server } from '../../urls/urls';

const Item = ({url}) => {
    return (
      <Paper>
        <img src={`${server}${url}`} className="w-full" alt="img" />
      </Paper>
    );
};

export default Item;