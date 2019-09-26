import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style'
import IconfontStyle from './asset/iconfont'
import setHtmlFontSize from './util/setHtmlFontSize'
import { Provider } from 'react-redux'
import store from './store/store'

import 'asset/border/border.css'

import RouterMap from '@/router/route'


setHtmlFontSize(document, window, 750)

ReactDOM.render(
        <Provider store = {store} >
            <IconfontStyle />
            <GlobalStyle />
            <RouterMap />
        </Provider>
        , document.getElementById('root'));

