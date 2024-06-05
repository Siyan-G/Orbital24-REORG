import { Box } from "@mui/material"

import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"
import { Courses } from "../../../ReactQuery/Queries/SearchPage-query"
import { CourseDetails } from "../../../ReactQuery/objects"
import Post from "./CourseContainer"

const Feed = () => {
  const Course = Courses()
  const { ref, inView } = useInView();

  useEffect(() => {
    if(inView && Course.hasNextPage){
      console.log("scroll success")
      Course.fetchNextPage();
    }
  }, [inView, Course.hasNextPage, Course.fetchNextPage]);
  console.log(Course.data?.pages.flatMap(page => page.content));

  // const content = Course.data?.pages.flatMap(page => page.content).map((todos: CourseDetails[]) =>
  //   todos.map((todo, index) =>{
  //     return <Post key={todo.moduleCode} course={todo} innerRef={index === todos.length - 1 ? ref : undefined} />
  // })
  // );

  const content = Course.data?.pages.flatMap(page => page.content) || []; // Access 'content' directly

  const renderedContent = content.map((todo: CourseDetails, index: number) => (
    <Post key={todo.moduleCode} course={todo} innerRef={index === content.length - 1 ? ref : undefined} />
  ));

  return (
    <Box flex={6} p={2} 
      justifyContent={'center'}
      display={'flex'}
      flexDirection={'column'}
      maxWidth={'80%'}
      maxHeight={'80%'}>
      {renderedContent}
      {Course.isFetchingNextPage && <h3> loading ...</h3>}
    </Box>
  )
}

export default Feed