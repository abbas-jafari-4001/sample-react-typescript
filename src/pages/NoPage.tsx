import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
            <p className="font-bold text-9xl">404</p>
            <div className="shadow-2xl w-72 text-center py-10">
                <p>No Found</p>
                <hr className="my-3 w-32 border-red-400 mx-auto"/>
                <Link
                    to="/"
                    className="text-sm text-blue-400 hover:underline duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
