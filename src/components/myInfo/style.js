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
export const ListWrap = style.div`
    margin-top: .2rem;
    background: #fff;
    font-size: .28rem;    
    .item-list{
        padding-left: .2rem;
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
                    text-align: center;
                    line-height: .5rem;
                    border-radius: 0.04rem;
                    color: #000;
                    font-size: .6rem;
                    vertical-align: middle;
                    margin-right: .3rem;
                }
            }
            .right-icon{
                width:.5rem
                font-size: .38rem;
            }
        }
    }

    .login-out{
        margin: .4rem 0;
        .login-out-btn{
            margin: 0 auto;
            text-align: center;
            display: block;
            padding: 0 .32rem;
            border-radius: .2rem;
            color: #fff;
            background: #F97150;
            font-size: .36rem;
            vertical-align: middle;
            line-height: .86rem;
            box-sizing: border-box;
            cursor: pointer;
            width: 89%;
        }
    }
`