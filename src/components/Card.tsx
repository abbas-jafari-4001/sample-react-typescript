
import { Link } from "react-router-dom";

interface Card {
    image: any;
}

export default function Card({ image }: Card) {
    return (
        <div className="mb-4 border shadow-lg object-cover">
            <Link to={`/image/${image.id}`}>
                <div className="flex flex-col items-start">
                    <img
                        src={image?.webformatURL}
                        alt={image?.tags}
                        className="w-full"
                    />
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
