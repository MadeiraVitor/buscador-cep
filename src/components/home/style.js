import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#121212, #212b46);

    h1 {
        font-size: 70px;
        color: #fff;
    }

    div.container-input {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 15px;
        margin: 35px 0;
        display: flex;
        border-radius: 8px;
        box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    }

    div.container-input input {
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: #fff;
        outline: none;
        margin-right: 10px;
    }

    div.container-input input::placeholder {
        color: #f1f1f1;
    }

    .button-search {
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.5s;
    }

    button.button-search:hover {
        transform: scale(1.2);
    }

    div.info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        width: 500px;
        border-radius: 8px;
    }

    div.info h2 {
        margin: 16px 0;
        font-size: 40px;
    }

    div.info span {
        margin-bottom: 16px;
        font-weight: bold;
    }

    @media (max-width: 620px){
        .title {
            font-size: 45px;
        }

        .info {
            width: 90%;
        }

        .info h2 {
            font-size: 25px;
        }
    }

    @media (max-width: 375px){
        .title {
            font-size: 35px;
        }

        .container-input {
            width: 90%;
        }

        .container-input input {
            font-size: 18px;
        }
    }
`;