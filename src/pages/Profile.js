import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const users = useSelector((state) => state.login.userLogin);
    const player = {
        name: users.user.fullName,
        age: users.user.age,
        beltColor: users.user.belt,
        achievements: ["1st Place Nationals", "2nd Place Regionals"],
        profileImage: users.user.image,
      };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <img
            src={player.profileImage}
            alt="Player Profile"
            className="w-32 h-32 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{player.name}</h2>
            <p className="text-lg">Age: {player.age > 0 ? player.age : "Please write your age"}</p>
            <p className="text-lg">Belt Color: {player.beltColor}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Achievements:</h3>
        <ul className="list-disc pl-6">
          {player.achievements.map((achievement, index) => (
            <li key={index} className="text-lg">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
