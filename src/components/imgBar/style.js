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
export const BarWrap = style.nav`
    min-width: 300px;
    padding-top: .2rem;
    position: absolute;
    top: 1rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0px
    }
    .img-item{
        text-decoration: none;
        display: inline-block;
        width: 50%;
        height: 3.5rem;
        padding: .3rem .2rem;
        box-sizing: border-box;
        img{
            width: 100%;
            height: 100%;
        }
    }

`
export const ShowImgBar = style.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #000;
    z-index: 1;
    img{
        width: 100%;
    }
`