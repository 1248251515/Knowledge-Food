/**这里将所有的跳转的页面都放在这里 */
import './App.css';
import DiscussionGroup from './pages/DiscussionGroup';
import Home from './pages/Home';
import Login from './pages/login';
import RegisterCom from './pages/register';
import RegistrationForm from './components/testComponent';
import VideoPage from './pages/videopage';
import {Route,Switch} from 'react-router-dom';
import HeadBer from "./components/HearBar";
import FooterBar from './components/FoooterBar';
import { Layout } from 'antd';
import { Header,Content,Footer } from 'antd/lib/layout/layout';
/**
 * 在Switch会出现 改变了路径页面却没发生跳转的问题 这就需要将 所有的路由都添加exact关键字(精准匹配路由)
 */
function App(props) {
  //console.log(isLogin, setLogin);
  let {isLogin, setLogin} = props;
  return (
    <>
      <Layout>
        <Header id='headber'>
          <HeadBer {...props}/>
        </Header>
        <Content className='contentS'>
          <Switch >
            <Route exact path='/Login' component={()=><Login setLogin={setLogin}/>} />
            <Route exact path="/" component={(router)=><Home {...router} isLogin={isLogin}/>} />
            <Route exact path="/DiscussionGroup" component={DiscussionGroup} />
            <Route exact path='/RegisterCom' component={RegisterCom}/>
            <Route exact path='/RegistrationForm' component={RegistrationForm}/>
            <Route exact path='/videopage' component={VideoPage}/>
          </Switch>
        </Content>
        <Footer className='FooterBar'>
          <FooterBar/>
        </Footer>
      </Layout>
    </>
  )
}

export default App;
