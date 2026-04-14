import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoArchive } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';



const FriendDetails = () => {


    const { id } = useParams();

    const Friend = useLoaderData();


    const exactFriend = Friend.find(friend => friend.id === Number(id));
    if (!exactFriend) {
        return <div className="text-center mt-20">
            <h2 className="text-2xl font-bold">Friend not found</h2>
            <p className="text-gray-600 mt-4">The friend you are looking for does not exist.</p>
        </div>;
    }

    return (
        <div className="container mx-auto my-12 flex flex-col md:flex-row gap-10">
            <div>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <div className=" items-center text-center p-6">
                        <figure>
                            <img
                                src={exactFriend.picture}
                                alt={exactFriend.name} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {exactFriend.name}
                            </h2>
                            <div className={exactFriend.status === "active" ? "bg-green-500 text-lime-50 px-4 rounded-3xl mx-3 w-16" : "bg-amber-300 text-lime-50 px-4 rounded-3xl mx-3 w-16"}>{exactFriend.status}</div>
                            <div className="badge badge-soft badge-success">Success</div>


                            <p>{exactFriend.bio}</p>
                            <p>email: {exactFriend.email}</p>
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
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center gap-3 mt-8"><span>{exactFriend.days_since_contact}</span> days since contact</div>
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center mt-8"><span>{exactFriend.goal}</span>Goal (Days)</div>
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center mt-8"><span>{exactFriend.next_due_date}</span>Next Due</div>
                </div>
                <div>
                    <div className="card card-border bg-base-100 w-96 bg-gray-300 shadow-sm mt-8 flex jiustify-between w-[800px]">
                        <div className="card-body">
                             <div className="card-actions justify-end">     
                                <button className="btn btn-soft">Edit</button>
                            </div>
                            <h2 className="card-title">Relationship Goal</h2>
                            <p>Connect every {exactFriend.goal} days</p>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;