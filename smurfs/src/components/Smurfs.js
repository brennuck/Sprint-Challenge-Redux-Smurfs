import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class Smurfs extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }
    render() {
        return (
            <div>
                {this.props.smurfs.map((smurf) => 
                    <div key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchSmurfs: state.fetchSmurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);