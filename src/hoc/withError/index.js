import React, {Fragment, useState, useEffect} from 'react';
import ErrorMessage from '../../components/ErrorMessage';

const withError = (WrappedComponent) => (props) => {

  const [isErrorOpened, setIsErrorOpened] = useState(false);

  useEffect(() => {
    if (props.error) setIsErrorOpened(true);
  }, [props.error]);

  return (
    <Fragment>
      {props.error &&
      <ErrorMessage
        isOpenMessage={isErrorOpened}
        handleClose={() => setIsErrorOpened(false)}
        message={props.error.message}
      />
      }
      <WrappedComponent {...props}/>
    </Fragment>
  );
};

export default withError;
