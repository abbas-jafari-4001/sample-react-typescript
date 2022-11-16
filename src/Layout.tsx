import { useEffect, useRef } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Layout() {
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
            <nav className="fixed bg-gray-200 w-1/2 md:w-1/4 lg:w-1/5 px-5 min-h-screen">
                <div className="">
                    <ul className="flex flex-col gap-y-4 py-10 font-bold">
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
                        <div className="relative border-b border-gray-400">
                            <span className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 bg-gray-200 text-gray-600 font-medium">
                                OR
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                ref={searchRef}
                                type="text"
                                className="w-full px-4 py-0.5 focus-visible:outline-none rounded-md"
                            />
                            <button
                                type="button"
                                className="absolute right-1 top-0.5"
                                onClick={searchHandler}
                            >
                                &#128270;
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>

            <div className="w-1/2 md:w-3/4 lg:w-4/5 px-2 md:px-5 min-h-screen ml-auto">
                <Outlet />
            </div>
        </section>
    );
}
