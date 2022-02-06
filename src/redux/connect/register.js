import Register_form from '../../components/register_form';
import { connect } from 'react-redux';
import {createIncrement} from '../createAction'
export default connect(
  (state)=>{
    console.log("state是个啥",state);
    return ({
      count:state,
      isphont:false,
    })
  },
  {
    add:createIncrement
  }
)(Register_form);