import styled from "styled-components"

export const Header = styled.header`
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
export const Back = styled.div`
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    padding-right: .2rem;
    .icon{
        font-size: .8rem !important;
    }
`
export const Title = styled.div`
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
`
export const NavWrap = styled.div`
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
export const Content = styled.div`
    background: #f0efed;
    font-weight: 400;
    min-width: 300px;
    padding: 0 .2rem;
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0px
    }
    .location-city{
        font-size: .28rem;
        margin-top: .2rem;
        background: #fff;
        padding: .3rem 0;
        padding-left: .2rem;
        .icon{
            color: #FFBD00;
            margin: 0 .1rem;
        }
    }
`

export const CityContent = styled.div`
    .city{
        margin-top: .5rem;
        .title{
            font-size: .3rem;
            font-weight: 500;
            padding-bottom: .2rem;
            padding-left: .1rem;
        }
        .city-cont{
            text-decoration: none;
            font-size: 0rem;
            .title{
                padding-top: .2rem;
                font-size: .28rem;
            }
            .item{
                font-size: .28rem;
                display: inline-block;
                background: #fff;
                width: 25%;
                height: .8rem;
                line-height: .8rem
                text-align: center;
                a{
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-bottom: 1px solid #ddd8ce;
                    border-right: 1px solid #ddd8ce;
                    text-decoration: none;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding:0 .1rem;
                }
            }
        }
    }
`
