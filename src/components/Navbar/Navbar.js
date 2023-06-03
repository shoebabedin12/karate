import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgUser } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  const [menu, setMenu] = useState(false);
  // const user = localStorage.getItem("loggedUser")
  // const newUSer = JSON.parse(user)
  const users = useSelector((state) => state.login.userLogin);
  // const [auth, setAuth] = useState(users);
  const dispatch = useDispatch();
  // console.log(users.user);

  

  const handleLogout = async () => {
    try {
      localStorage.removeItem("User");
      window.location.reload(router("/login"));
      // router("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const hendleMenu = () => {
    setMenu(!menu);
    console.log("click");
  };
  return (
    <>
      <div className="shadow-md sticky top-0 bg-white w-full z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="logo">
              <Link to={"/"} className="font-bold text-xl text-black">BYKKC</Link>
            </div>

            {users !== null ? (
              <>
                <div className="items-center gap-x-3 hidden md:flex">
                  <ul className="flex items-center justify-start md:gap-4">
                    <li>
                      <Link
                        to="/home"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/total-branch"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Classes
                      </Link>
                    </li>
                    {users.user.role === "student" && (
                      <li>
                        <Link
                          to="/total-students"
                          className="text-black font-medium text-base hover:text-gray-500"
                        >
                          Total Student
                        </Link>
                      </li>
                    )}
                    {users.user.role === "teacher" && (
                      <li>
                        <Link
                          to="/total-teacher"
                          className="text-black font-medium text-base hover:text-gray-500"
                        >
                          Total Teacher
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        to="/attendance"
                        className="text-black font-medium text-base hover:text-gray-500"
                      >
                        Attendance
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-x-3">
                  <Link
                    to="/profile"
                    className="border py-1 px-2 rounded-md shadow-md flex items-center text-black hover:bg-gray-200"
                  >
                    {users.user.image ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover mr-2"
                        src={users.user.image}
                        alt=""
                      />
                    ) : (
                      <CgUser />
                    )}
                    <span>{users.user.fullName}</span>
                  </Link>
                  <button
                    className="border py-2 px-2 rounded-md shadow-md text-black hidden md:block hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    <AiOutlineLogout className="w-5 h-full" />
                  </button>
                  <div className="mob-menu">
                    <button
                      className="border py-2 px-2 rounded-md shadow-md text-black block md:hidden hover:bg-gray-200"
                      onClick={hendleMenu}
                    >
                      <HiOutlineMenuAlt3 />
                    </button>
                    {menu && (
                      <ul
                        className={`flex items-center flex-col justify-center gap-4 absolute left-0 bg-black w-full h-screen z-10 ease-linear delay-500 ${
                          menu ? "top-0 " : "-top-full"
                        }`}
                      >
                        <button
                          className="border py-2 px-2 rounded-md shadow-md text-white block md:hidden absolute top-3 right-3"
                          onClick={hendleMenu}
                        >
                          <HiOutlineMenuAlt3 />
                        </button>
                        <li>
                          <Link
                            to="/home"
                            className="text-white font-medium text-base hover:text-gray-300"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/total-branch"
                            className="text-white font-medium text-base hover:text-gray-300"
                          >
                            Total Branch
                          </Link>
                        </li>
                        {users.user.role === "student" && (
                          <li>
                            <Link
                              to="/total-students"
                              className="text-white font-medium text-base hover:text-gray-300"
                            >
                              Total Student
                            </Link>
                          </li>
                        )}
                        {users.user.role === "teacher" && (
                          <li>
                            <Link
                              to="/total-teacher"
                              className="text-white font-medium text-base hover:text-gray-300"
                            >
                              Total Teacher
                            </Link>
                          </li>
                        )}
                        <li>
                          <Link
                            to="/attendance"
                            className="text-white font-medium text-base hover:text-gray-300"
                          >
                            Attendance
                          </Link>
                        </li>
                        <li>
                          <button
                            className="text-white hover:text-gray-300"
                            onClick={handleLogout}
                          >
                            LogOut
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-x-3">
                  <Link
                    to={"login"}
                    className="font-medium text-lg text-black hover:text-gray-500"
                  >
                    Login
                  </Link>
                  <Link
                    to={"signup"}
                    className="font-medium text-lg text-black hover:text-gray-500"
                  >
                    Signup
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
