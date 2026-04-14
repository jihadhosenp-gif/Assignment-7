import React, { use } from 'react';
import { Link } from 'react-router';


const FriendsPromise = fetch("/FriendsData.json").then(res => res.json());

const Friends = () => {

    const Friends = use(FriendsPromise);
    console.log(Friends, "Friends");
    return (
        <div className="my-12 container mx-auto">
            <h1 className="text-3xl font-bold mb-4 m-10 p-4">Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 p-4 hover:bg-gray-100 rounded-lg">
                {Friends.map((Friends, index) => {
                    return <Link to={`/FriendDetails/${Friends.id}`} className="card bg-base-100 w-96 shadow-sm " key={index}>
                        <figure>
                            <img
                                src={Friends.picture}
                                alt={Friends.name}
                                className="rounded-full w-24 h-24 object-cover mx-auto mt-4"/>
                        </figure>
                        <div className="card-body flex mx-auto items-center">
                            <h2 className="card-title">
                                {Friends.name}
                            </h2>
                            <div className="badge badge-outline">{Friends.days_since_contact}d ago</div>



                            <div className="badge badge-outline badge-success ">{Friends.tags}</div>
                            <div className={ Friends.status  === "active" ? "bg-green-500 text-lime-50 px-4 rounded-3xl mx-3" : "bg-amber-300 text-lime-50 px-4 rounded-3xl mx-3"}>{Friends.status}</div>

                        </div>
                    </Link>
                })

                }
            </div>

        </div>
    );
};

export default Friends;