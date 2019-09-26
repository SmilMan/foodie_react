import styled from 'styled-components'


export const WrapUl = styled.ul`
    height: 3.4rem;
    min-width: 237px;
    background: #fff;
    box-sizing: border-box;
    padding: .1rem 0;
    li{
        width: 25%;
        height: 50%;
        display: inline-block;
        .icon-wrap{
            text-align: center;
            text-decoration: none;
            outline: none;
            display: inline-block;
            width: 100%;
            height:100%;
            color: #fff;
            i{ 
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: #fd9d21;
                font-size: .66rem;
                padding: .1rem;
            }
            span {
                display: block;
                margin-top: .15rem;
                font-size: .2rem;
                color: #000;
            }
        }
    }
`

