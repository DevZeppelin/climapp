import React from 'react'
import PropTypes from 'prop-types'


const Header = ({titulo}) => {
    return (
        <nav>
            <h3 className="nav-wrapper light-blue darken-2 center pad-2">
                    <a href="#!">{titulo}</a>
            </h3>
            
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}


export default Header
