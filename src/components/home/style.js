import styled from "styled-components";
import BgImg from "../home/rasmlar/bgImg.jpg"



const Wrapper = styled.div`
        width: 100%;
        height: calc(100vh - 90px);
        background-image:url(${BgImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        .container{
            margin-left: 140px;
         
          /* text-align: center; */
          
            h1{
                width: 392px;
                height: 183px;
                font-family: "poppins";
                font-size: 48px;
                font-weight: bold;
                line-height: 64px;
                font-style: normal;
                text-align: left;
                color: #ffffff;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                margin-bottom: 10px;
            }
            p{
                width: 457px;
                height: 72px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 16px;
                font-weight: 300;
                line-height: 24px;
                font-style: normal;
                text-align: left;
                color: #ffffff;
            }
            button{
                width: 168px;
                height: 48px;
                border-radius: 24px;
                filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ));
                background: #01444f;
                margin: 24px 16px 0 0;
            }
            .batfsil{
                background-color: #ffffff;
            }
            
        }
`;

export default Wrapper