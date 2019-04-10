import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from "@material-ui/core/IconButton";

function FavoriteIc({large}) {

  const [isClickAble, setIsClick] = useState(false);

  const changeHandle = () => {
    setIsClick(!isClickAble);
  };

  return (
    <IconButton aria-label="Add to cart" onClick={changeHandle}>
      {isClickAble
        ? <FavoriteIcon color="primary" fontSize={large}/>
        : <FavoriteIcon fontSize={large}/>
      }
    </IconButton>
  );
}

export default FavoriteIc;
