import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

class Info extends React.Component {
    render() {
        let { name, age, birthDate } = this.props;
        return (
            <div>
                <h1> {name} </h1>
                <h3> Birthday: {moment(birthDate).format("MMM Do YYYY hh:mm a")}  </h3>
                <h3> Age:  {age}  </h3>
            </div>)
    }
}

Info.propTypes = {
    child: PropTypes.object
};

export default Info;

