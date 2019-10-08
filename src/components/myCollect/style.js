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
    .wrap {
        display: flex;
        background: #fff;
        padding: .3rem .2rem;
        border-bottom:1px solid #eee;
        .title-img{
            width: 1.8rem
            height: 1.64rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            flex-grow: 1;
            padding-left: .3rem;
            h5{
                padding-top: .1rem;
                margin-bottom: .12rem;
                font-size: .3rem;
                font-weight: 400;
                color: #333;
            }
            .food-name{
                font-size: .24rem;
                height: .6rem;
                margin-bottom: .16rem;
                color: #666;
                width: 4rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .price{
                display: flex;
                box-sizing: border-box;
                p:nth-child(1) {
                    flex-grow: 1;
                    font-size: .36rem;
                    color: #F60;
                    span{
                        font-size: .24rem;
                        padding-left: .1rem
                    }
                }
                p:nth-child(2) {
                    width: 2rem;

                }
            }
        }
    }

    
`