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
            font-size: .7rem;
        }
    }
`

export const ContentWrap = style.div`
    font-size: .26rem;
    position: absolute;
    top: 1.2rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0px
    }
    .noOrder{
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        img{
            width: 70%;
        }
    }
    .wrap{
        display: flex;
        background: #fff;
        box-sizing: border-box;
        padding: .3rem .24rem;
        margin-bottom: .2rem;
        .title-img{
            width: 1rem;
            img{
                width: .76rem;
                height: .76rem;
            }
        }
        .content{
            flex-grow: 1;
            color: #999;
            text-decoration: none;
            .name{
                margin-bottom: .2rem;
                color: #000;
                font-size: .32rem;
            }
            .food_name{
                width: 4rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .price{
                padding: .1rem 0;
            }
        }
        .classfy{
            text-align: center;
            width: 1.5rem;
            height: 1.5rem;
            position: relative;
            .class{
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: center;
                border: 1px solid #ccc;
                box-sizing: border-box;
                padding: .2rem .4rem;
                border-radius: 20%;
            }
        }
    }
`