/**表单外组件 */
import React from 'react'
import '../pageStyle/Login.css'
import Registerform from '../components/register_form'
class RegisterCom extends React.Component{
  constructor(){
    super()
    this.name = "name"
    this.div = React.createRef();
  }
  componentDidMount(){
    this.div.current.style.height = (window.innerHeight - document.querySelector('#headber').offsetHeight) + 'px';
  }
  render(){
    return (
      <div ref={this.div} className="Login">
        <section className="Login_box">
          <h1>用户注册</h1>
          <div className="Login_form">
            <Registerform/>
          </div>
        </section>
      </div>
    )
  }
}
export default RegisterCom;