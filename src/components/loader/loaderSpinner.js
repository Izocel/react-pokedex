import React from 'react';
import { Segment, Loader } from 'semantic-ui-react';

class LoaderSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return <div className='ui page dimmer active'>
      <Loader size='big'>Loading</Loader>
    </div>
  }
}

export default LoaderSpinner
