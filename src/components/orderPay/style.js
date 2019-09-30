import style from "styled-components"

export const Header = style.header`
    display: flex;
    min-width: 300px;
    height: .8rem;
    background-color: #FAFAFA;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    color: #000;
    .icon-wrap{
        text-decoration: none;
        display: block;
        height: .8rem;
        min-width: .3rem;
        line-height: .8rem;
        .icon{
            display: block;
            width: 100%;
            height: 100%;
            line-height: .8rem;
            font-size: .5rem;
        }
    }
`
export const Back = style.div`
    width: 1rem;
    height: .8rem;
    line-height: .8rem;
    box-sizing: border-box;
    padding-right: .2rem;
    .icon{
        font-size: .8rem !important;
    }
`
export const Title = style.div`
    flex-grow: 1;
    height: .8rem;
    line-height: .8rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
    padding-right: 1rem;
    box-sizing: border-box;
`
export const ContentWrap = style.div`
    position:absolute;
    top: .8rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    .title{
        padding: .82rem 0 .72rem;
        text-align: center;
        h5{
            font-size: .48rem;
            font-family: MTfin, "DINAlternate-Bold", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-align: center;
            padding: .1rem 0;
            span{
                font-size: .8rem;
            }
        }
        .name{
            font-size: .24rem;
            color: #999;
        }
    }


    .pay-method{
        display: flex;
        font-size: .34rem;
        font-weight: bold;
        padding: 1rem .5rem 1rem .5rem;;
        img{
            width: .6rem;
            height: .6rem;
        }
        input{
            height: .4rem;
            width: .4rem;
        }
        .pay-name{
            line-height: .6rem;
            padding: 0 .5rem;
            flex-grow: 1;
        }
    }

    .dec{
        color: #999;
        font-size: .2rem;
        padding-left: .6rem;
    }

    .Sure{
        margin: .4rem 0;
        .login-btn{
            margin: 0 auto;
            text-align: center;
            display: block;
            padding: 0 .32rem;
            border-radius: .2rem;
            color: #222;
            background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
            font-size: .36rem;
            vertical-align: middle;
            line-height: .86rem;
            box-sizing: border-box;
            cursor: pointer;
            width: 89%;
        }
    }
`

export const Loading = style.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    opacity: .8;
    text-align: center;
    img{
        width: 70%;
        margin-top: 2rem;
    }
    p{
        opacity: 1;
        font-size: .8rem;
    }

`