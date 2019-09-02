import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, //没有#号
  Route,    //路由标签
  Switch,   //Switch： 匹配到一个就不会往下匹配
  Redirect, //重定向(输入不存在的路由会重定向到设置的页面)
  Link,     //路由跳转链接
  NavLink   //提供活动标识链接 （高亮代表选择）
} from 'react-router-dom';



import './index.css'
import './style/routerCss.css'
import TodoList from './components/TodoList.js'
import TagList from './components/TagList.js'
import Control from './components/Control.js'
import UnControl from './components/UnControl.js'
import Person from './components/Person.js'
import TodoWrapper from './todoListComponents/TodoWrapper.js';
import LifeCycle from './life/LifeCycle.js'

import Home from './pages/Home/Home.js'
import Activities from './pages/Activities/Activities.js'
import Topics from './pages/Topics/Topics.js'
import Login from './pages/Login/Login.js'
import Article from './pages/Article/Article.js'
import NoMatch from './pages/noMatch/NoMatch.js'
import App from './App.js'

//redux学习
import ReduxTodoList from './pages/redux/component/ReduxTodoList.js'
import Counter from './pages/redux/component/Counter.js'
import { Provider } from 'react-redux'
import store from './pages/redux/index.js'

//路由
import PrivateRouter from './pages/components/privateRouter.js'

const topList = [
    {
      id: 0,
      title: '老年人才用9键',
      new: true,
      hot: '46万'
    },
    {
      id: 1,
      title: '人贩子张维平死刑',
      new: true,
      hot: '44万'
    },
    {
      id: 2,
      title: '全国冻哭预警地图',
      new: false,
      hot: '35万'
    },
    {
      id: 3,
      title: '沈梦辰晒婚纱照',
      new: false,
      hot: '33万'
    },
    {
      id: 4,
      title: '恋爱4个月胖50近',
      new: true,
      hot: '32万'
    },
    {
      id: 5,
      title: '郭麒麟初中早恋',
      new: false,
      hot: '25万'
    },
    {
      id: 6,
      title: '男孩滑雪遭遇雪崩',
      new: true,
      hot: '24万'
    },
    {
      id: 7,
      title: '大熊猫玩菜刀',
      new: false,
      hot: '24万'
    },
    {
      id: 8,
      title: '姿态宣布退役',
      new: false,
      hot: '22万'
    },
    {
      id: 9,
      title: '卫龙辣条吃出虫子',
      new: false,
      hot: '20万'
    },
    {
      id: 10,
      title: '女生被罚抱头蹲',
      new: true,
      hot: '20万'
    }
  ]

const person = {
  // name:'rmx',
  age:20,
  height:175,
  sex:'男'
}

//react有两种组件的添加方法：1.函数式  2.类
// ReactDOM.render(
//   <>
//     {/* React-Router使用 */}
//     <Router>
//         <App>
//           {/*Switch： 匹配到一个就不会往下匹配 */}
//           <Switch>
//             {/* 严格包含关系 */}
//             <Route path="/" exact component={Home}></Route>
//             <Route path="/activities" component={Activities}></Route>
//             {/* <Route path="/topics" component={Topics}></Route> */}
//             <PrivateRouter path="/topics" component={Topics}></PrivateRouter>
//             <Route path="/login" component={Login}></Route>
//             <Route path="/article/:id" component={Article}></Route>{/**/}
//             <Route path="/error.html" component={NoMatch}></Route>
//             <Redirect to="/error.html"></Redirect>
//           </Switch>
//         </App>
//     </Router>
//     {/* React的生命周期 */}
//     {/* <LifeCycle></LifeCycle> */}
//     {/* ↓↓组件嵌套父子之间通信↓↓↓ */}
//     {/* <TodoWrapper></TodoWrapper>  */}
//     {/* ↓↓组件父传子对象props传递↓↓↓ */}
//     {/* <Person {...person}></Person> */}
//     {/* ↓↓组件父传子props传递↓↓↓ */}
//     {/* <TagList list = { topList }></TagList> */}
//     {/* 类写法 */}
//     {/* <TodoList></TodoList> */}
//     {/* 受控组件 */}
//     {/* <Control></Control> */}
//     {/* 非受控组件 */}
//     {/* <UnControl></UnControl> */}
//   </>, 
//   document.getElementById('root')
// );



//2.redux的学习
ReactDOM.render(
    <Provider store={store}>
      <Counter></Counter>
      <ReduxTodoList></ReduxTodoList>
    </Provider>,
    document.getElementById('root')
)





















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// //PWA渐进式增加WEB应用
// //请求一次 下一次就不需要网络了 会把数据存储在客户端
// import * as serviceWorker from './serviceWorker';

// //jsx ->js + xml(html)
// //jsx ->React.createElement(type,props,children...) -> VNode对象(描述当前元素) -> 渲染到页面上
// ReactDOM.render(<App />, document.getElementById('root'));

// //使用serviceWorker
// serviceWorker.unregister();




//jsx源码解析↓↓↓↓↓↓↓↓↓↓↓↓↓
// const Render = {
//     createElement(type,props,...children){
//         return {
//             type,
//             props,
//             children
//         }
//     }
// }

// let div = <div id='demo'>shanshan<span id="desc">zuimei</span></div>;

// const render = (vNode,container)=>{
//     if(typeof vNode === 'string'){
//         const text = document.createTextNode(vNode);
//         return container.appendChild(text);
//     }
//     const {type,props,children} = vNode;
//     const ele = document.createElement(type);
//     for(let key in props){
//         if(key.startsWith('__')){
//             break;
//         }
//         ele.setAttribute(key,props[key]);
//     }
//     children.forEach(item=>{
//         render(item,ele)
//     })
//     container.appendChild(ele)
// }
// render(div,window.root)

