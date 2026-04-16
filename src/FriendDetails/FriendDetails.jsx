import React, { useContext } from 'react';
import { FaBell, } from 'react-icons/fa';
import { IoArchive, IoCallSharp, } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineMessage, MdOutlineVideoCall } from 'react-icons/md';
import { FriendContext } from '../context/FriendProvider';






const FriendDetails = () => {



    const { id } = useParams();

    const Friend = useLoaderData();




    const { storedFriends, storedFriendsText, storedFriendsVideo, handleMarkAsFriends, handleMarkAsFriendsVideo, handleMarkAsFriendsText } = useContext(FriendContext);
    console.log(storedFriends, storedFriendsText, storedFriendsVideo, handleMarkAsFriends, handleMarkAsFriendsVideo, handleMarkAsFriendsText, "friendContext");





    const exactFriend = Friend.find(friend => friend.id === Number(id));
    if (!exactFriend) {
        return <div className="text-center mt-20">
            <h2 className="text-2xl font-bold">Friend not found</h2>
            <p className="text-gray-600 mt-4">The friend you are looking for does not exist.</p>
        </div>;
    }
    const { name, picture, status, bio, email, days_since_contact, goal, next_due_date } = exactFriend;


    console.log(id, "id");


    return (
        <div className="container mx-auto my-12 flex flex-col md:flex-row gap-10">
            <div>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <div className=" items-center text-center p-6">
                        <figure>
                            <img
                                src={picture}
                                alt={name} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {name}
                            </h2>
                            <div className={status === "active" ? "bg-green-500 text-lime-50 px-4 rounded-3xl mx-3 w-16" : "bg-amber-300 text-lime-50 px-4 rounded-3xl mx-3 w-16"}>{status}</div>
                            <div className="badge badge-soft badge-success">Success</div>


                            <p>{bio}</p>
                            <p>email: {email}</p>
                        </div>

                    </div>

                </div>
                <div className=" flex flex-col w-[350px] gap-2 mt-2">
                    <button className="btn btn-soft"> <FaBell /> Snooze 2 weeks</button><br />
                    <button className="btn btn-soft"><IoArchive /> Archive</button><br />
                    <button className="btn btn-soft btn-error"> <RiDeleteBin5Fill /> Delete</button><br />
                </div>

            </div>
            <div>

                <div className="flex  w-[800px] gap-2 text-2xl p-5">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center gap-3 mt-8"><span>{days_since_contact}</span> days since contact</div>
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center mt-8"><span>{goal}</span>Goal (Days)</div>
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center mt-8"><span>{next_due_date}</span>Next Due</div>
                </div>
                <div>
                    <div className="card card-border bg-base-100 w-96 bg-gray-300 shadow-sm mt-8 flex jiustify-between w-[800px]">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-soft">Edit</button>
                            </div>
                            <h2 className="card-title">Relationship Goal</h2>
                            <p>Connect every {goal} days</p>

                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-[230px] h-[200px] mt-10 mr-10" onClick={() => handleMarkAsFriends(exactFriend)} ><IoCallSharp /> Call</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-[230px] h-[200px] mt-10 mr-10" onClick={() => handleMarkAsFriendsText(exactFriend)}><MdOutlineMessage /> Message</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-[230px] h-[200px] mt-10 " onClick={() => handleMarkAsFriendsVideo(exactFriend)}><MdOutlineVideoCall /> Video </button>

                </div>
                <div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;