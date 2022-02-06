/**测试文件 */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// 这个例子展示了如何渲染两个不同的屏幕
//（或不同上下文中的同一屏幕）在相同的 url，
// 取决于你是如何到达那里的。
//
// 单击颜色并全屏查看它们，然后“访问
// 画廊”并单击颜色。注意 URL 和组件
// 和以前一样，但现在我们在模态中看到它们
// 在旧屏幕的顶部。
class ModalSwitch extends React.Component {
// 我们可以将一个位置传递给 <Switch/>，它会告诉它
// 忽略路由器的当前位置并使用该位置
// 代替
//
// 我们也可以使用“位置状态”来告诉应用程序用户
// 想要在模态中转到`/img/2`，而不是作为
// 主页，保持画廊在其后面可见。
//
// 通常，`/img/2` 与 `/` 处的图库不匹配。
// 所以，为了让两个屏幕都渲染，我们可以保存旧的
// location 并将其传递给 Switch，因此它会认为位置
// 仍然是 `/`，即使它是 `/img/2`。
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    //防止同一个同一个路由多次跳转
    const { location } = this.props;
    // 如果 props.location 不是模态，则设置 previousLocation
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // 不是初始渲染
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={ImageView} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </div>
    );
  }
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];

const Thumbnail = ({ color }) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: color
    }}
  />
);

const Image = ({ color }) => (
  <div
    style={{
      width: "100%",
      height: 400,
      background: color
    }}
  />
);

const Home = () => (
  <div>
    <Link to="/gallery">Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li>
        <Link to="/img/2">Tomato</Link>
      </li>
      <li>
        <Link to="/img/4">Crimson</Link>
      </li>
    </ul>
  </div>
);

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
);

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
};

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) {
    return null;
  }
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default ModalGallery;