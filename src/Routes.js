import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BuildSentencePage } from "./pages/BuildSentencePage";

export const route = {
    home: () => `/`,
};

export function Routes(){
    return (
        <Switch>
            <Route path={route.home()} exact component={BuildSentencePage}/>
        </Switch>
    );
}