import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import TodoList from './components/TodoList.js'
import TagList from './components/TagList.js'
import Control from './components/Control.js'
import UnControl from './components/UnControl.js'
import Person from './components/Person.js'
import TodoWrapper from './todoListComponents/TodoWrapper.js';
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
ReactDOM.render(
  <>
    <TodoWrapper></TodoWrapper>
    <Person {...person}></Person>
    <TagList list = { topList }></TagList>
    <TodoList></TodoList>
    <Control></Control>
    <UnControl></UnControl>
  </>, 
  document.getElementById('root')
);





















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

