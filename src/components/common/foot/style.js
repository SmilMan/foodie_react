import style from 'styled-components'

export const Footer = style.footer`
    margin-top: .2rem;
    color: #06c1ae;
    font-size: .26rem;
    padding: .6rem .2rem .6rem .2rem;
    .login-wrap{
        display: flex;
        padding: .4rem 0;
        .login-regist{
            width: 4rem;
            .login{
                margin-right: .5rem
            }
            .btn{
                display: inline-block; 
                height: .6rem;
                width: 1rem;
                border: 1px solid #06c1ae; 
                font-size: .28rem
                border-radius: 20%;
                text-align: center;
                line-height: .6rem;
                text-decoration: none;
                color: #000;
            }
        }
        .city-wrap{
            flex-grow: 1;
            height: .6rem;
            line-height: .6rem;
            .city{
                font-size: .4rem;
                color: #000;
                vertical-align: middle;
                margin-right: .1rem;
            }
            .city-name{
                display: inline-block;
                border:1px solid #06c1ae;
                padding: 0 .2rem;
                width: 1.1rem;
                height: .6rem;
                line-height: .6rem;
                text-align: center;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
                color: #000;

            }
        }
    }
`

export const Nav = style.nav`
    margin: .3rem .2rem .3rem 0;
    .nav-wrap{
        font-size: .34rem;
        text-align: center;
        .home,
        .order{
            border-right: 1px solid #000;
        }
        .item{
            padding: 0 .5rem;
            display: inline-block;
            a{
                color: #000;
                text-decoration: none;
            }
            p{
                color: #000;
            }
        }
    }
`
export const Line = style.div`
    position: relative;
    margin-top: .6rem;
    &:after{
        display: block;
        content: '';
        width: 100%;
        border:1px solid #999;
        position: absolute;
        top: 0;
    }
    p{
        margin: 0 auto;
        background: #f0efed;
        width: 2rem;
        line-height: .2rem;
        text-align: center;
        z-index: 1;
        position: relative;
        color: #999;
        top: -.1rem;
    }
`