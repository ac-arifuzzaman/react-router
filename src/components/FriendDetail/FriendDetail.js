import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams()
    return (
        <div>
            <h1>hello form dosto er bari: {friendId}</h1>
        </div>
    );
};

export default FriendDetail;