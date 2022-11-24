import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Card {
    image: any;
}

export default function Card({ image }: Card) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        image?.webformatURL &&
            setTimeout(() => {
                setLoaded(true);
            }, 1000);
    },[image?.webformatURL]);
    return (
        <div className="mb-4 border shadow-lg object-cover hover:scale-110">
            <Link to={`/image/${image.id}`}>
                <div className="flex flex-col items-start">
                    {loaded ? (
                        <img
                            src={image?.webformatURL}
                            alt={image?.tags}
                            className="w-full aspect-video duration-700"
                        />
                    ) : (
                        <div className="shimmer w-full aspect-video" />
                    )}

                    <div className="py-8 px-4 ">
                        <p>
                            <span className="font-bold">ID</span>: {image?.id}
                        </p>
                        <p>
                            <span className="font-bold">views</span>:{" "}
                            {image?.views}
                        </p>
                        <p>
                            <span className="font-bold">Tags</span> :{" "}
                            {image?.tags}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
