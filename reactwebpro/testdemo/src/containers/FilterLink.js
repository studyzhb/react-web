import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibility} from '../actions';

const mapStateToProps=(state,ownProps)=>{
    console.log(ownProps)
    return {
        active:ownProps.filter===state.visibilityFilter
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)