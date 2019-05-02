import React, {Fragment, useState, useEffect} from 'react';
import SuccessMessage from '../../components/SuccessMessage';

const withSuccess = (WrappedComponent) => (props) => {
  const [isSuccessOpened, setIsSuccessOpened] = useState(false);

  useEffect(() => {
    if (props.success) setIsSuccessOpened(true);
  }, [props.success]);

  return (
    <Fragment>
      {props.success &&
      <SuccessMessage
        isOpenMessage={isSuccessOpened}
        handleClose={() => setIsSuccessOpened(false)}
        message={props.success.message}
      />
      }
      <WrappedComponent {...props}/>
    </Fragment>
  );
};

export default withSuccess;
