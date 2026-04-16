import React, { useContext } from 'react';
import { FaBell } from 'react-icons/fa';
import { IoArchive, IoCallSharp } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineMessage, MdOutlineVideoCall } from 'react-icons/md';
import { FriendContext } from '../context/FriendProvider';

const FriendDetails = () => {

    const { id } = useParams();
    const Friend = useLoaderData();

    const { storedFriends, storedFriendsText, storedFriendsVideo, handleMarkAsFriends, handleMarkAsFriendsVideo, handleMarkAsFriendsText } = useContext(FriendContext);

    const exactFriend = Friend.find(friend => friend.id === Number(id));

    if (!exactFriend) {
        return <div className="text-center mt-20">
            <h2 className="text-2xl font-bold">Friend not found</h2>
            <p className="text-gray-600 mt-4">The friend you are looking for does not exist.</p>
        </div>;
    }

    const { name, picture, status, bio, email, days_since_contact, goal, next_due_date } = exactFriend;

    return (
        <div className="container mx-auto my-12 px-4 flex flex-col lg:flex-row gap-6">

           
            <div className="w-full lg:w-1/3">

                <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm">
                    <div className="items-center text-center p-6">
                        <figure>
                            <img src={picture} alt={name} className="w-24 h-24 rounded-full mx-auto" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>

                            <div className={status === "active"
                                ? "bg-green-500 text-white px-4 rounded-3xl w-20"
                                : "bg-amber-300 text-white px-4 rounded-3xl w-20"}>
                                {status}
                            </div>

                            <div className="badge badge-soft badge-success">Success</div>

                            <p className="text-sm">{bio}</p>
                            <p className="text-sm">email: {email}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full max-w-sm mx-auto gap-2 mt-4">
                    <button className="btn btn-soft"><FaBell /> Snooze 2 weeks</button>
                    <button className="btn btn-soft"><IoArchive /> Archive</button>
                    <button className="btn btn-soft btn-error"><RiDeleteBin5Fill /> Delete</button>
                </div>
            </div>

            
            <div className="w-full lg:w-2/3">

              
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6">
                    <div className="card bg-base-300 h-20 flex items-center justify-center">
                        <span className="font-bold">{days_since_contact}</span>
                        <h1>Days Since Contact</h1>
                    </div>
                    <div className="card bg-base-300 h-20 flex items-center justify-center">
                        <span className="font-bold">{goal}</span>
                        <h1>Goal (Days)</h1>
                    </div>
                    <div className="card bg-base-300 h-20 flex items-center justify-center">
                        <span className="font-bold">{next_due_date} </span>
                        <h1>Next Due Date</h1>
                    </div>
                </div>

            
                <div className="mt-6">
                    <div className="card bg-gray-300 shadow-sm w-full">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-soft">Edit</button>
                            </div>
                            <h2 className="card-title">Relationship Goal</h2>
                            <p>Connect every {goal} days</p>
                        </div>
                    </div>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

                    <button
                        className="btn w-full h-24 sm:h-32"
                        onClick={() => handleMarkAsFriends(exactFriend)}
                    >
                        <IoCallSharp /> Call
                    </button>

                    <button
                        className="btn w-full h-24 sm:h-32"
                        onClick={() => handleMarkAsFriendsText(exactFriend)}
                    >
                        <MdOutlineMessage /> Message
                    </button>

                    <button
                        className="btn w-full h-24 sm:h-32"
                        onClick={() => handleMarkAsFriendsVideo(exactFriend)}
                    >
                        <MdOutlineVideoCall /> Video
                    </button>

                </div>

            </div>
        </div>
    );
};

export default FriendDetails;