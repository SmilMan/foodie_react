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
    font-size: .34rem;
    h5{
        padding: .2rem 0 .2rem .3rem;
    }
    .order-wrap{
        .textarea-style{
            border: 1px solid red;
            height: 1rem;
            textarea::placeholder{
                color: red;
            }
        }
        .textarea-no-style{
           border: 1px solid #eee;
            height: 1rem;
            textarea::placeholder{
                color: #000;
            } 
        }

        .item-list{
            position: relative;
            background: #fff;
            border-top: 1px solid #eee;
            padding: 0 0.2rem;
            line-height: 0.9rem;
            height: 0.9rem;
            text-align: left;
            font-size: 0.3rem;
            box-sizing: border-box;
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