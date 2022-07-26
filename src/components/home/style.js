import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#121212, #212b46);

    .title {
        font-size: 70px;
        color: #fff;
    }

    .container-input {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 15px;
        margin: 35px 0;
        display: flex;
        border-radius: 8px;
        box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    }

    .container-input input {
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: #fff;
        outline: none;
        margin-right: 10px;
    }

    .container-input input::placeholder {
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

    .button-search:hover {
        transform: scale(1.2);
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        width: 500px;
        border-radius: 8px;
    }

    .info h2 {
        margin: 16px 0;
        font-size: 40px;
    }

    .info span {
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