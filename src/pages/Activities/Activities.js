import React, { Component } from 'react';
import { Route, Switch, Redirect, Prompt } from 'react-router-dom';

import ActivitiesNav from '../components/activitiesNav/activitiesNav.js'
import Recommended from './actChildren/recommended'
import All from './actChildren/all'
import Pins from './actChildren/pins'
import Articles from './actChildren/articles'

export class Activities extends Component {
    render() {
        return (
            <>
                <Prompt message={(location)=>{
                    if (!location.pathname.includes('/activities')) {
                        return window.confirm('确定要离开吗？')
                    }else {
                        return true;
                    }
                }}></Prompt>
                <div>
                    <ActivitiesNav></ActivitiesNav>
                    <Switch>
                        <Route path="/activities/recommended" component={Recommended}></Route>
                        <Route path="/activities/all" component={All}></Route>
                        <Route path="/activities/articles" component={Articles}></Route>
                        <Route path="/activities/pins" component={Pins}></Route>
                        <Redirect to="/activities/recommended"></Redirect>
                    </Switch>
                </div>
            </>
        );
    }
}
export default Activities;
