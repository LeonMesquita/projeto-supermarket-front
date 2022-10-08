import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner({loaderType}){
    return(
        // !loaderType ?
        <Loader>
        <ThreeDots 
            height="70"
            width="70"
            color= "white"
            ariaLabel='loading'
            
        />            
        </Loader>

        // :
        // <Loader>
        // <Oval 
        // height="100"
        // width="100"
        // color='#FCCB6F'
        // secondaryColor='grey'
        // ariaLabel='loading'
        // />
        // </Loader>
    

    );
}
//'#07203D'
//#00BFFF
const Loader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   
   height: 100%;
`