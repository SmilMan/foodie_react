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
export const Title = style.div`
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
    padding-left: 1rem;
    box-sizing: border-box;
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

export const InputWrap = style.div`
    font-size: .38rem;
    .title{
        background: #fff;
        padding: .25rem 0;
        text-align: center;
        font-size: .25rem;
    }
    .content{
        margin-top: .2rem;
        padding-left: .2rem;
        background: #fff;
        [type="text"]{
            border-bottom: 1px solid #eee;
        }
        p{
            padding: .2rem 0;
            input{
                outline: none;
                padding: .1rem 0;
                width: 100%;
                display: block;
                border: 0;
                height: .6rem;
                margin: -.15rem 0;
                text-indent: .1rem;
                line-height: 1;
                font-size: .3rem;
                border-radius: .06rem;
            }
        }
    }
`

export const LoginBtn = style.div`
    .login{
        margin: .4rem 0;
        .login-btn{
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
    .dec{
        font-size: 0.26rem;
        color: #FE8C00;
        display: flex;
        padding: 0 .3rem;
        justify-content: space-between;
    }

`

export const AlertMessage = style.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0,0,0,0.6);
    font-size: .38rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: red;
`