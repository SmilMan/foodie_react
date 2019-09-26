
import React, { Component, Fragment } from 'react';

import {Link} from 'react-router-dom'

import { Header, 
    Back, 
    Title, 
    NavWrap,
} from  './style'

class MapL extends Component {

    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>位置详情</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>

                <div id="allmap" style={{ position: "absolute", top: '1rem', left: 0, width: '100vw', height: '90vh' }}></div>
            </Fragment>
        );
    }

    componentDidMount() {
        const { BMap } = window;
        const shopDetail = JSON.parse(sessionStorage.getItem("shopDetail"));
        const shopName = shopDetail.data[0].shop_name;// 商家的名字
        const location = shopDetail.data[0].detail_location;//商家的位置
        var map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(118.647374,24.888606), 11); // 初始化地图,设置中心点坐标和地图级别
       
        // 添加地图的一些控件;
        map.addControl(new BMap.NavigationControl());    
        map.addControl(new BMap.ScaleControl()); 
        map.addControl(new BMap.OverviewMapControl());    
        map.addControl(new BMap.MapTypeControl());

        // 创建标注
        // var marker = new BMap.Marker(new BMap.Point(118.647374,24.888606));        // 创建标注    
        // map.addOverlay(marker);
        // marker.addEventListener("click", function(){    
        //     alert("您点击了标注");    
        // }); 

        // 检索POI

        var local = new BMap.LocalSearch(map,   
              { renderOptions:{map: map, autoViewport: true}});      
                local.searchNearby(shopName, location); 
    }

    hashBakc() {
        window.history.back();
    }
}
export default MapL
