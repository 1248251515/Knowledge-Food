/**表单外组件 */
import React from 'react'
import '../pageStyle/Login.css'
import Login_from from '../components/Login_form'
class Login extends React.Component{
  constructor(props){
    super(props)
    this.div = React.createRef()
  }
  componentDidMount(){
    this.div.current.style.height = (window.innerHeight - document.querySelector('#headber').offsetHeight) + 'px';
    console.log(document.querySelector('#headber').offsetHeight);
  }
  render(){
    return (
      <div ref={this.div} className="Login">
        <section className="Login_box">
          <h1>用户登录</h1>
          <div className="Login_form">
            <Login_from {...this.props}/>
          </div>
        </section>
      </div>
    )
  }
}
export default Login;