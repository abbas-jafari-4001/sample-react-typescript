import { useQuery } from "@tanstack/react-query";
import { getAllImages, getImageById } from "../_axios";

export const useAllImages = (term?: string) => {
    return useQuery({
        queryKey: ["image", term],
        queryFn: () => getAllImages(term),
        // enabled: !!term,
    });
};
export const useImageById = (id: string | undefined) => {
    return useQuery({
        queryKey: ["image", id],
        queryFn: () => getImageById(id),
        // enabled: !!id,
    });
};
