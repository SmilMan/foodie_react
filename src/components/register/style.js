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
export const ContentWrap = style.div`
    .userName{
        padding: .28rem .2rem;
        background: #fff;
        input{
            font-size: .3rem;
            border: none;
            display: block;
            width: 90%;
            outline: none;
        }
    }
    .dec{
        font-size: .24rem;
        padding: .2rem .2rem;
        line-height: .4rem;
    }

    .userName{
        padding: .28rem .2rem;
        background: #fff;
        position: relative;
        input{
            font-size: .3rem;
            border: none;
            display: block;
            width: 90%;
            outline: none;
        }
        .icon{
            position: absolute;
            top: .2rem;
            right: .45rem;
            font-size: .38rem;
            z-index: 10;
            height: .6rem;
            line-height: .6rem;
            width: .6rem;
            text-align: center;
        }
    }
    .dec{
        font-size: .24rem;
        padding: 0 .2rem;
        line-height: .4rem;
        padding-bottom: .2rem;
    }
    .register{
        margin: .4rem 0;
        .register-btn{
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
