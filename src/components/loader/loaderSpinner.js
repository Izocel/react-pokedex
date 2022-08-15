import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderSpinner = () => (
    <Dimmer active>
      <Loader />
    </Dimmer>
)

export default LoaderSpinner
