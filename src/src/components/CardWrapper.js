import {SimpleGrid} from '@chakra-ui/react'

export default function CardWrapper(props){
    return(
        <SimpleGrid 
        columns={props.columns} 
        spacing='50px'
        pr='5vh'
        w='auto'
        h='full'
        pb={4}
        pt={4} 
        overflowX={'auto'}
        overflowY={'auto'} 
        whiteSpace='nowrap' 
        css={{
            "&::-webkit-scrollbar": {height:"10px", width:'10px',},
            "&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},
            "&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}
        >
            {props.children}
        </SimpleGrid>
    );
}