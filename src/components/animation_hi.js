import * as React from "react"
import PropTypes from "prop-types"

import "./animations.css"

const AnimationHi = ({ size, color, bgColor }) => (
    <>
        <div
            id="animationHiContainer"
            style={{
                backgroundColor: bgColor,
                padding: '8px',
                textAlign: 'center',
                overflow: 'hidden',
            }}>
            <div
                id="animationHiText"
                className="animate__animated animate__fadeInUp"
                style={{
                    fontSize: size,
                    color: color,
                }}>
                Hi!
            </div>
        </div>
    </>
)

AnimationHi.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
}

AnimationHi.defaultProps = {
    size: 20,
    color: `white`,
    bgColor: `black`,
}

export default AnimationHi