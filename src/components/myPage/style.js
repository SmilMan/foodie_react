import style from "styled-components"

export const Header = style.header`
    display: flex;
    min-width: 300px;
    height: 1rem;
    background: #06c1ae;
    color: #fff;
    .icon-wrap{
        text-decoration: none;
        color: #fff
        display: block;
        height: 1rem;
        min-width: .3rem;
        line-height: 1rem;
        .icon{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 1rem;
            font-size: .5rem;
        }
    }
`
export const Back = style.div`
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    padding-right: .2rem;
    .icon{
        font-size: .8rem !important;
    }
`
export const Title = style.div`
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
`
export const NavWrap = style.div`
    height: 1rem;
    line-height: 1rem;
    display:flex;
    .right-nav{
        width: 1rem;
        text-align: center;
        .icon{
            height: 0rem;
        }
        .icon-nav{
            font-size: .4rem;
        }
    }
`

export const UserTitle = style.div`
    height: 1.6rem;
    position: relative;
    img{
        height: 100%;
        width:100%;
    }
    .user-info{
        font-size: .26rem;
        position: absolute;
        top: .2rem;
        width: 100%;
        display: flex;
        .user-photo{
            padding-left: .4rem;
            width: 1.2rem;
            height: 1.2rem;
        }
        .user-name{
            flex-grow: 1;
            box-sizing: border-box;
            padding-top: .1rem;
            padding-left: .4rem;
            .name{
                padding: .2rem 0;
            }
            .money span{
                color: #FF9712;
            }
        }
        .change-info{
            width: 1rem;
            font-size: .38rem;
            line-height: 1.2rem;
            text-align: center;
            text-decoration: none;
            color: #000;
            padding-right: .2rem;
            box-sizing: border-box;
        }
    }
`

export const OrderWrap = style.div`
    margin-top: .2rem;
    background: #fff;
    font-size: .28rem;
    .all-order{
        padding: .28rem .2rem;
        display: flex;
        width: 100%;
        border-bottom: 1px solid #DDD8CE;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: #fff;
        box-sizing: border-box;
        text-decoration: none;
        color: #000;
        .content{
            flex-grow: 1;
            i{
                display:inline-block;
                width: .5rem;
                height: .5rem;
                background: #FE8C00; 
                text-align: center;
                line-height: .5rem;
                border-radius: 0.04rem;
                color: #fff;
                margin-right: .3rem;
            }
        }
        .right-icon{
            width:.5rem
            font-size: .38rem;
        }
    }

    .order-dec{
        padding: .2rem 0;
        display: flex
        justify-content: space-around;
        li{
            height: 1.3rem;
            text-align: center;
            position: relative;
            .navWrap{
                color: #000;
                padding-top: .1rem;
                text-decoration:none;
                i{
                    font-size: .6rem;
                }
                p{
                    margin-top: .2rem;
                }
            }
            .circle-num{
                position: absolute;
                top: -4px;
                left: 30px;
                width: .5rem;
                height: .5rem;
                border-radius: 50%;
                background: #f00;
                color: #fff;
                line-height: .5rem;
                text-align: center;
            }
        }
    }

    .item-list{
        padding-top: .2rem;
        background: #eee;
    }
`