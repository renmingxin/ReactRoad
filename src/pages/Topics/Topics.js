import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default class Topics extends Component {
    state = {
        articleList:JSON.parse(localStorage.getItem('articleList')) || []
    }
    render() {
        return (
            <ul>
                {
                    this.state.articleList.map(item=>(
                        <li key={item.id}>
                            <div className="articleList-author">{item.author}</div>
                            <Link to={{
                                pathname:`/article/${item.id}`,
                                state:{
                                    author:item.author,
                                    title:item.title
                                }
                            }} className="articleList-title">{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
