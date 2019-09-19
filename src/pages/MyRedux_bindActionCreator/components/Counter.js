import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { bindActionCreator as myBindActionCreators } from '../redux';

// import {connect} from 'react-redux';
import { connect } from '../react-redux'
// import { getCountAddAction } from '../store/actions/counter';
import * as actions from '../store/actions/counter';

class Counter extends Component {
  render () {
    return (
      <div>
        { this.props.count }
        <button onClick={ this.handleClick }>add</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.add(6)
  }
}

// const mapStateToProps = (state) => ({
//   count: state.counter.count
// })

const mapStateToProps = (state) => state.counter;


// const mapDispatchToProps = (dispatch) => ({
//   getCountAddAction: (val) => {
//     dispatch(getCountAddAction(val))
//   }
// })


const mapDispatchToProps = (dispatch) => myBindActionCreators(actions, dispatch)

// export default connect(mapStateToProps, actions)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);