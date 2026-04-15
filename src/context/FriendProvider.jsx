import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    
    const [storedFriends, setStoredFriends] = useState([]);

    const handleMarkAsFriend = (id) => {
        
        const isExistingFriend = storedFriends.find(friend => friend.id === id.id);
        if (isExistingFriend) {
            alert("This friend is already in you call list.");
            return;
        }else {
        setStoredFriends([...storedFriends, id]);
        alert("Friend added to your call list.");
        }

    }

    const data = {
        storedFriends,
        handleMarkAsFriend, 
        setStoredFriends,
    }

    return <FriendContext.Provider value={data}> 
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;