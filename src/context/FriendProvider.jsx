import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {

    const [storedFriendsVideo, setStoredFriendsVideo] = useState([]);
    const [storedFriendsText, setStoredFriendsText] = useState([]);
    const [storedFriends, setStoredFriends] = useState([]);


    const handleMarkAsFriendsVideo = (id) => {
        const isExistingFriendVideo = storedFriendsVideo.find(friend => friend.id === id.id);
        if (isExistingFriendVideo) {
            toast.error("This friend is already in you Video list.");
            return;
        } else {

            const newData = { ...id, type: "video" };

            setStoredFriendsVideo([...storedFriendsVideo, newData]);
            setStoredFriends([...storedFriends, newData]);

            toast.success("Friend added to your Video list.");
        }
    };


    const handleMarkAsFriendsText = (id) => {
        const isExistingFriendText = storedFriendsText.find(friend => friend.id === id.id);
        if (isExistingFriendText) {
            toast.error("This friend is already in you Text list.");
            return;
        } else {

            const newData = { ...id, type: "text" };

            setStoredFriendsText([...storedFriendsText, newData]);
            setStoredFriends([...storedFriends, newData]);

            toast.success("Friend added to your Text list.");
        }
    };

    const handleMarkAsFriends = (id) => {
        const isExistingFriend = storedFriends.find(friend => friend.id === id.id);
        if (isExistingFriend) {
            toast.error("This friend is already in you call list.");
            return;
        } else {
            const newData = { ...id, type: "call" };

            setStoredFriends([...storedFriends, newData]);

            toast.success("Friend added to your call list.");
        }
    };

    const data = {
        handleMarkAsFriendsVideo,
        storedFriendsVideo,
        handleMarkAsFriendsText,
        storedFriendsText,
        handleMarkAsFriends,
        storedFriends,
        setStoredFriends,
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;