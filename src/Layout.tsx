import { useEffect, useRef, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Layout() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const searchRef = useRef<any>();
    const navigate = useNavigate();
    const searchHandler = () => {
        navigate(searchRef.current.value);
    };
    useEffect(() => {
        window.onkeyup = (e) => {
            if (e.key === "Enter") {
                navigate(searchRef.current.value);
            }
        };
    }, []);

    const classesLink = "hover:text-blue-600 duration-300 block";
    return (
        <section className="relative flex items-start">
            <nav
                className={`fixed bg-gray-200 dark:bg-[#3B3B3B] ${
                    toggleMenu ? "" : "-ml-[50vw]"
                } w-1/2 md:w-1/4 lg:w-1/5 px-5 min-h-screen duration-500 md:ml-0`}
            >
                <div className="">
                    <ul className="flex flex-col gap-y-4 py-10 font-bold dark:text-white">
                        <div className="relative">
                            <input
                                ref={searchRef}
                                type="text"
                                className="w-full px-4 py-1.5 font-normal focus-visible:outline-none rounded-md"
                                placeholder="Search..."
                            />
                            <button
                                type="button"
                                className="absolute right-1 top-1.5"
                                onClick={searchHandler}
                            >
                                &#128270;
                            </button>
                        </div>
                        <div className="relative border-b border-gray-400 dark:border-white my-5">
                            <span className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 bg-gray-200 dark:bg-[#3B3B3B] text-gray-600 dark:text-white font-medium">
                                OR
                            </span>
                        </div>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                All Images
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/car"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                Car
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/flower"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                Flower
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/people"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                People
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cat"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                Cat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dog"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-600" : ""
                                    } ${classesLink}`
                                }
                            >
                                Dog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <button
                className={`md:hidden fixed bottom-5 right-5 px-3 py-2 ${toggleMenu ? "bg-green-600" : "bg-blue-600"} rounded text-sm text-white shadow-md shadow-black/70 duration-500`}
                onClick={() => {
                    setToggleMenu(!toggleMenu);
                }}
            >
                {toggleMenu ? "close" : "open"}
            </button>
            <div className="w-full md:w-3/4 lg:w-4/5 px-2 md:px-5 min-h-screen ml-auto">
                <Outlet />
            </div>
        </section>
    );
}
