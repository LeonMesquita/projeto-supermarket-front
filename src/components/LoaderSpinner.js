import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner({loaderType}){
    return(
        !loaderType ?
        <Loader>
        <ThreeDots 
            height="70"
            width="70"
            color= "white"
            ariaLabel='loading'
            
        />            
        </Loader>

        :
        <OvalLoader>
            <Oval 
            height="100"
            width="100"
            color='#5ec45e'
            secondaryColor='grey'
            ariaLabel='loading'
            />
        </OvalLoader>
    

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

const OvalLoader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   
   height: 400px;
   width: 100%;
`