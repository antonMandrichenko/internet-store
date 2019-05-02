import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

StarRates.propTypes = {
  fontSize: PropTypes.string,
  onOver: PropTypes.func,
  rate: PropTypes.string,
  handleSelectStar: PropTypes.func,
  onLeave: PropTypes.func,
};

function StarRates({
                     fontSize,
                     onOver,
                     rate,
                     handleSelectStar,
                     onLeave
                   }) {

  const rateStar = new Array(5).fill(0);

  return (
    <div style={{color: 'orange', marginBottom: '1rem'}}>
      {rateStar.map((item, ind) =>
        ind <= rate && rate
          ? <StarIcon
            key={ind}
            fontSize={fontSize}
            onMouseEnter={onOver}
            onMouseLeave={onLeave}
            onClick={handleSelectStar}
            data-count={ind}/>
          : <StarBorderIcon
            key={ind}
            fontSize={fontSize}
            onMouseEnter={onOver}
            onClick={handleSelectStar}
            data-count={ind}/>
      )}
    </div>
  );
}

export default StarRates;
