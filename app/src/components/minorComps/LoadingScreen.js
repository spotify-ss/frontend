import React from 'react'

import loadingGif from '../../illustrations/surrealist_lightbulb.gif'
import {Illustration} from '../StyledComps'

import {FullScreenOverlay} from '../StyledComps'
export default () => {
    return (
        <FullScreenOverlay>
            <Illustration src={loadingGif} alt="Loading Illustration" />
            <h1>LOADING</h1>
        </FullScreenOverlay>
    )
}