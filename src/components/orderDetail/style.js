import style from "styled-components"

export const Header = style.header`
    width: 100%;
    background: #fff
    text-align: center;
    font-size: .2rem;
    position: relative;
    top: 0rem;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0;
    padding-bottom: 4.2rem;
    .icon-wrap{
        position: absolute;
        top: .2rem;
        width: .9rem;
        height: .9rem;
        line-height: 1rem;
        text-align: center;
        background: #333;
        opacity: .2;
        color: #fff;
        border-radius: 50%;
        i{
            font-size: .5rem;
        }
    }
    .icon{
        left: .3rem;
    }
    .right-nav{
        right: .3rem;
        text-decoration: none;
    }

    img{
        width:100%;
        margin-bottom: 1rem;
    }
 `
 export const ContentWrap = style.div`
    position: absolute;
    top: 4.2rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    font-size: .34rem;
    &::-webkit-scrollbar{
        width: 0px
    }
    h5{
        padding: .2rem 0 .2rem .3rem;
    }
    .order-wrap{
        .item-list{
            position: relative;
            background: #fff;
            border-top: 1px solid #eee;
            padding: 0 0.2rem;
            line-height: 0.9rem;
            height: 0.9rem;
            text-align: left;
            font-size: 0.3rem;
            .item{
                position:absolute;
                right: .4rem;
            }
            .totle-price{
                color: #ff9712;
            }
            .chose{
                z-index: 1;
                button{
                    padding:.1rem;
                    width: .5rem;
                }
                input{
                    border: 1px solid #eee;
                    outline: none;
                    width: .8rem;
                    height: .5rem;
                    margin: 0 .1rem;
                    text-align: center;
                }
            }
        }
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
            background: #f90;
            font-size: .36rem;
            vertical-align: middle;
            line-height: .86rem;
            box-sizing: border-box;
            cursor: pointer;
            width: 89%;
        }
    }
`