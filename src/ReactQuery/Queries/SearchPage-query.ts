import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GetCourse } from "../axios"

export const Courses = () => {
    return useInfiniteQuery({
        queryKey: ['GetCourse'],
        queryFn: GetCourse,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length+1 :undefined;
            return nextPage
        }
});
}