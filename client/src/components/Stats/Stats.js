import React from 'react';
import PropTypes from 'prop-types';
import {ProgressBar} from 'react-bootstrap';
import './Stats.css';


class Stats extends React.Component {
    render(){
        let { fullness, happiness, hygiene, energy } = this.props;
        return(
            <div className="stats-main">
                <div className="stats-subcontainer">
                    <ProgressBar striped active now={fullness} label="Hunger"/>
                </div>
                <div className="stats-subcontainer">
                    <ProgressBar striped  active now={happiness} label="Happiness"/>
                </div>
                <div className="stats-subcontainer">
                    <ProgressBar striped active now={hygiene} label="Dirty Diaper"/>
                </div>
                <div className="stats-subcontainer">
                    <ProgressBar striped active now={energy} label="Energy"/>
                </div>

            </div>
        )
    }
}

Stats.propTypes = {
    child: PropTypes.object
};

export default Stats;

