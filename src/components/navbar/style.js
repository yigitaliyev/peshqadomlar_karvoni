import styled from "styled-components";


const Wrapper = styled.div`
   width: 100%;
   height: 90px;
   background-color: #01444F;
   display: flex;
   align-items: center;
   padding: 0 40px;
    .container{
        display: flex;
         
        .logo{
          margin-right: 50px;
        }
        .qidiruv{
            display: flex;
            align-items: center;
            margin-right: 100px;
            input{
                width: 600px;
                height: 60px;
                border: none;
                border-radius: 10px;
                background: #01525f;
                padding-left: 20px;
                font-weight: 500;
                font-size  :20px ;
                ::placeholder{
                    width: 97px;
                    height: 20px;


                    font-family: "poppins-medium";
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 18px;
                    font-style: normal;
                    text-align: left;
                    color: #ededed;
                }
            }

        }
        .ijtimoi_tarmoqlar{
            margin-right: 50px;
            .box_logo{
                h2{
                    width: 268px;
                    height: 18px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 18px;
                    font-style: normal;
                    color: #ededed;  
                }
                div{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    margin-top: 10px;
                    
                    img{
                        width: 30px;
                        height: 30px;
                    }
                }
            } 

        }
        .ariza_topshirish{
            display: flex;
             align-items: center;
            button{
                width: 200px;
                height: 50px;
                background: #ededed;
                border-radius: 30px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 20px;
                color: #01444f;
            }



        }
       

    }

`;

export default Wrapper