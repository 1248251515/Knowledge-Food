import Login_form from '../../components/Login_form';
import { connect } from 'react-redux';
import {createIncrement} from '../createAction'
export default connect(
  (state)=>{
    console.log("state是个啥",state);
    return {
      count:state,
      istads:1
    }
  },
  {
    add:createIncrement
  }
)(Login_form);