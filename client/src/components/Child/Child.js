import React from 'react';
import PropTypes from 'prop-types';
import './Child.css'

class Child extends React.Component {

    render() {
        let { name, status } = this.props;
        return (
            <div>
                <div className="child-avatar"><img src={`./assets/images/${name}/${status}.png`} alt={name} /></div>
            </div>
        )
    }
}

Child.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string
};

export default Child; 