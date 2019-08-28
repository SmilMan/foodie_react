import style from 'styled-components';

export const Nav = style.div`
    height:  .9rem;
    font-size: .34rem;
    text-align: center;
    background: #fff;
    line-height: .9rem;
    border-bottom: 1px solid #eee;
    margin-top: -.1rem;
    display: none;
`

export const ContentWrap = style.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow-y: scroll;
    z-index: -1;
    &::-webkit-scrollbar{
        width: 0px
    }
`
export const HeaderLogo = style.div`
    height: 4rem;
    height: 2.2rem;
    border-bottom: 1px solid #eee;
    img{
        height: 100%;
        width: 100%;
    }
`