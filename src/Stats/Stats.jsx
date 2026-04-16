import React, { useContext } from "react";
import { FriendContext } from "../context/FriendProvider";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
    const {
        storedFriendsText,
        storedFriendsVideo,
        storedFriends,
    } = useContext(FriendContext);

    const callCount = storedFriends.filter(
        (friend) => friend.type === "call"
    ).length;

    const data = [
        { name: "Text", value: storedFriendsText.length },
        { name: "Call", value: callCount },
        { name: "Video", value: storedFriendsVideo.length },
    ];

    const COLORS = ["#4F46E5", "#9CA3AF", "#22C55E"];

    const total =
        storedFriendsText.length +
        storedFriendsVideo.length +
        callCount;

    return (
        <div className=" my-12 container mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">

            <div className="bg-white w-full max-w-sm sm:max-w-md p-5 sm:p-6 rounded-2xl shadow-xl text-center">

                <h2 className="text-lg sm:text-xl font-bold mb-1">
                    Friendship Analytics
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                    By Interaction Type
                </p>

               
                <div className="flex justify-center">
                    <PieChart width={260} height={260} className="sm:w-[300px] sm:h-[300px]">
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-base sm:text-lg font-bold fill-gray-700"
                        >
                            {total}
                        </text>

                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: "12px" }} />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;