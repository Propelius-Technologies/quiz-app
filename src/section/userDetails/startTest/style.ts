export const MainBox ={
    display: "flex", justifyContent: "center"
}

export const MainCard={
    display:'flex',
    flexDirection:'column',
    padding: { xs: '15px', sm: '20px',md:'50px' },
    gap: '50px',
    width: { xs: '100%', sm: 'fit-content' },
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    background:'#282C48',
}

export const TestHeader ={
     display: 'flex', gap: '20px'
}

export const TestHeading={
    fontSize: '20px', fontWeight: '700' ,color:'#fff'
}

export const Description={
    fontSize: { xs: '12px', sm: '16px' },color:'#fff'
}

export const ListContainerCard ={
    display:'flex',
    border: '1px solid #000',
    width: '100%',
    padding:{md:'45px',sm:'25px',xs:'20px'},
    borderRadius: '10px',
    gap:'20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    backgroundColor:'#181B32'
}


export const ListCard={
    padding:'24px',
    width:'100%',
    gap:'20px',
    backgroundColor:'#282C48',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    display:'flex',justifyContent:'space-between',
    alignItems:'center'
}

export const TestRound = {
    color:'#fff',fontSize:'16px',fontWeight: 600
}

export const StartTestButtonBox ={
    display:'flex',justifyContent:'center'
}

export const StartTestButton ={
    '&:focus, &:hover': {
        backgroundColor: '#40BA77',
    },
    backgroundColor: '#40BA77', maxWidth: {md:'50%',xs:'100%'},padding:'30px'
}

