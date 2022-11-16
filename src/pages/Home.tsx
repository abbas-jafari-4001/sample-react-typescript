import { useParams } from "react-router-dom";
import Card from "src/components/Card";
import { useAllImages } from "src/_queries/inext";

export default function Home() {
    const { term } = useParams();
    const { status, data } = useAllImages(term);

    return (
        <>
            <div className="mt-2 md:mt-4 columns-1 sm:columns-2 md:columns-3 gap-4">
                {status === "loading"
                    ? [1, 2, 3, 4, 5, 6].map((item, index) => (
                          <div key={index} className="shimmer h-80 mb-4"></div>
                      ))
                    : data.hits.map((image: any, index: number) => {
                          return <Card key={index} image={image} />;
                      })}
            </div>
        </>
    );
}
