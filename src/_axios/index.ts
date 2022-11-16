import axios from "axios";

const api: string | undefined = process.env.REACT_APP_API;
const apiKey: string | undefined = process.env.REACT_APP_KEY;

export const getAllImages = async (term?: string) => {
    const { data } = await axios.get(
        `${api}/?key=${apiKey}&category=backgrounds${
            term ? "&q=" + term : ""
        }&image_type=photo`,
    );
    return data;
};

export const getImageById = async (id: string | undefined) => {
    const { data } = await axios.get(`${api}/?key=${apiKey}&id=${id}`);
    return data;
};
