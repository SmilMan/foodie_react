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
            font-size: .65rem;
        }
    }
`
export const ContentWrap = style.div`
    height: 100px;
    box-sizing: border-box;
    min-width: 300px;
    textarea{
        box-sizing: border-box;
        padding: 0;
        width: 100%;
        outline: none;
        border: 0;
        text-indent: .5rem;
        padding-top: .3rem;
    }
    .com{
        box-sizing: border-box;
        position: relative;
        &::after{
            position: absolute;
            top: .6rem;
            content: '';
            width: .1rem;
            height: .3rem;
            background: #00f;
            display: block;
        }
        h4{
            line-height: .9rem;
            margin-left: .3rem;
        }
        background: #fff;
        margin-top: .2rem;
        padding: .3rem 0;
        padding-left: .2rem;
        font-size: .3rem;
    }

    .btnForCom{
        margin: .6rem 0;
        .com-btn{
            margin: 0 auto;
            text-align: center;
            display: block;
            padding: 0 .32rem;
            border-radius: .2rem;
            color: #222;
            background: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
            font-size: .36rem;
            vertical-align: middle;
            line-height: .86rem;
            box-sizing: border-box;
            cursor: pointer;
            width: 89%;
        }
    }
`