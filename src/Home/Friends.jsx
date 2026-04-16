import React, { use } from 'react';
import { Link } from 'react-router';

const FriendsPromise = fetch("/FriendsData.json").then(res => res.json());

const Friends = () => {

    const Friends = use(FriendsPromise);
    console.log(Friends, "Friends");

    return (
        <div>

            <div className="my-8 container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">


                    <div className="bg-white shadow-md rounded-xl p-4 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                            {Friends.length}
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm">Total Friends</p>
                    </div>


                    <div className="bg-white shadow-md rounded-xl p-4 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                            {Friends.filter(f => f.status === "active").length}
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm">On Track</p>
                    </div>


                    <div className="bg-white shadow-md rounded-xl p-4 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                            {Friends.filter(f => f.status !== "active").length}
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm">Need Attention</p>
                    </div>


                    <div className="bg-white shadow-md rounded-xl p-4 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                            {Friends.reduce((acc, curr) => acc + curr.days_since_contact, 0)}
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Interactions This Month
                        </p>
                    </div>

                </div>
            </div>


            <div className="my-12 container mx-auto px-4">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 px-2">
                    Your Friends
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                    {Friends.map((Friends, index) => {
                        return (
                            <Link
                                to={`/FriendDetails/${Friends.id}`}
                                className="card bg-base-100 w-full max-w-sm mx-auto shadow-md hover:shadow-xl transition duration-300"
                                key={index}
                            >
                                <figure>
                                    <img
                                        src={Friends.picture}
                                        alt={Friends.name}
                                        className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover mx-auto mt-4"
                                    />
                                </figure>

                                <div className="card-body flex mx-auto items-center text-center">
                                    <h2 className="card-title text-sm sm:text-base">
                                        {Friends.name}
                                    </h2>

                                    <div className="badge badge-outline text-xs">
                                        {Friends.days_since_contact}d ago
                                    </div>

                                    <div className="badge badge-outline badge-success text-xs">
                                        {Friends.tags}
                                    </div>

                                    <div
                                        className={
                                            Friends.status === "active"
                                                ? "bg-green-500 text-white px-3 py-1 rounded-2xl text-xs"
                                                : "bg-amber-400 text-white px-3 py-1 rounded-2xl text-xs"
                                        }
                                    >
                                        {Friends.status}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Friends;