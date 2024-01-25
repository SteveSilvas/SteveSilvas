import React from 'react';
import Box from '../../Components/Box';

const Certificate:React.FC = () => {
    return (
        <div className='Page'>
            <Box style={{ width: '100%', height: '100%' }}>
                oi
                {/* <img src={image} style={{ width: 'auto', height: '100%', alignItems: 'center' }} /> */}
            </Box>

            <Box style={{ width: '100%', height: '100%' }}>
                <strong>Quem sou</strong>
                <p style={{ width: '70%', fontSize: '1.2rem', lineHeight:'2rem', color:'var(--gray)' }}>
                    
                </p>
            </Box>
        </div>
    )
}

export default Certificate;