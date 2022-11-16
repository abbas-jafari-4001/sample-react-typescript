import { useParams } from "react-router-dom";
import { useImageById } from "src/_queries/inext";

export default function SingleImage() {
    const { imageId } = useParams();
    const { data, status } = useImageById(imageId);
    const image = data?.hits[0];

    const saveFile = () => {
        const url = image?.webformatURL;
        var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function () {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = filename;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            // delete a;
        };
        xhr.open("GET", url);
        xhr.send();
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-3xl w-full border shadow-2xl shadow-blue-500">
                <div className="flex flex-col md:flex-row items-start">
                    {status === "success" ? (
                        <img
                            src={image?.webformatURL}
                            alt={image?.tags}
                            className="w-full md:w-96 min-h-[18rem]"
                        />
                    ) : (
                        <div className="shimmer w-96 h-72"></div>
                    )}

                    <div className="py-8 px-5 md:px-10 text-xl flex flex-col gap-y-4 ">
                        <p>
                            <span className="font-bold">User</span>:{" "}
                            {image?.user}
                        </p>
                        <p>
                            <span className="font-bold">Width</span>:{" "}
                            {image?.webformatWidth}
                        </p>
                        <p>
                            <span className="font-bold">Height</span>:{" "}
                            {image?.webformatHeight}
                        </p>
                        <button
                            type="button"
                            onClick={saveFile}
                            className="bg-gray-100 py-2 rounded-lg text-blue-600 hover:shadow-lg duration-300"
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
