import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import './index.css'
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
  let element =(
    <div className="wrapper">
        <div className="search-title-box">
            <h5 className="search-title" style={{color:'red'}}>搜索热点</h5>
            <span className="refresh">换一换</span>
            <div dangerouslySetInnerHTML = { {__html:'危险容易被XSS攻击'} }></div>
        </div>
        <ul className="top-list-container">
            {
               topList.map((item,index)=>{
                   const indexStyle = {};
                   switch (index) {
                       case 0:
                           indexStyle.backgroundColor = '#f54545';
                           break;
                        case 1:
                            indexStyle.backgroundColor = '#ff8547';
                            break;
                        case 2:
                            indexStyle.backgroundColor = '#ffac38';
                            break;
                       default:
                           break;
                   }
                   return (
                        <li className="top-list" key={item.id}>
                            <div className="top-title">
                                <span className="hot-index" style={ indexStyle }>{index+1}</span>
                                <a className="topic-title">{item.title}</a>
                                {
                                    item.new ? <span className="topic-new">新</span>:''
                                }
                            </div>
                            <div className="hot-degree">
                                <span>{item.hot}</span>
                            </div>
                        </li>
                   )
               })
            }
        </ul>
    </div>
  )


ReactDOM.render(element, document.getElementById('root'));





















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

