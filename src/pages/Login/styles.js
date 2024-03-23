import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    background: linear-gradient(90deg, rgba(142,139,144,1) 41%, rgba(122,150,141,1) 50%);
    width: 30%;
    display: flex;   
    justify-content: center;
    height: 90vh;
    margin-top: 50px;
    border-radius: 30px;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 50px;
`;

export const AreaInput = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    gap: 20px;
    margin-top: 15%;

    input[type=text] {
        padding: 15px;
        font-size: 18px;
        border-radius: 30px;
        border: 2px solid #1e6e36;
        width: 120%;
        font-size: 20px;
        background-color: transparent;  
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
        &::placeholder {
            color: #63384a;
        }
    }

    input[type=password] {
        padding: 15px;
        font-size: 18px;
        border-radius: 30px;
        border: 2px solid #1e6e36;
        width: 120%;
        font-size: 20px;
        background-color: transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &::placeholder {
            color: #63384a;
        }
    }

    p {
        color: #63384a;
        cursor: pointer;
    }
`;

export const ButtonLogin = styled.button`
    background-color: #63384a;
    opacity: .8;
    padding: 5px 50px;
    color: #FFF;
    border: none;
    border-radius: 30px;
    margin-top: 30px;
    font-size: 25px;
    font-weight: bold;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        opacity: .6;
    }

    &:active {
        opacity: .8;
    }
`;