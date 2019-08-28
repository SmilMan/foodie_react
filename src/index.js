import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style'
import IconfontStyle from './asset/iconfont'
import setHtmlFontSize from './tool/setHtmlFontSize'
import { Provider } from 'react-redux'
import store from './store/store'

setHtmlFontSize(document, window, 750)

ReactDOM.render(
        <Provider store = {store}>
            <IconfontStyle/>
            <GlobalStyle/>
            <App/>
        </Provider>
        , document.getElementById('root'));

