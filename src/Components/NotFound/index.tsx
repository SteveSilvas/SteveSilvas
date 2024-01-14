import React from 'react';

function NotFound() {
    return (
        <div style={{
            padding:"10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>404 Not Found</h1>
            <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        </div>
    );
}

export default NotFound;
