import { Box } from "@mui/material"

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from "react"
import { Courses } from "../../../ReactQuery/Queries/SearchPage-query"
import { CourseDetails } from "../../../ReactQuery/objects"
import Post from "./CourseContainer"
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from "axios"

const Feed = () => {
  const [items, setItems] = useState<CourseDetails[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    console.log("called api")
    axios
      .get("http://localhost:8081/api/mod?page=1")
      .then((res) => setItems(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    console.log("fetched next page")
    console.log(index)
    axios
      .get(`http://localhost:8081/api/mod?page=${index}`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data.content]);

        index < 1559 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Box flex={4} p={2} 
      justifyContent={'center'}
      display={'flex'}
      flexDirection={'column'}
      >
      <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      
          {items &&
            items.map((item) => <Post course={item} key={item.moduleCode}/>)}
        
    </InfiniteScroll>
    </Box>
  )
}

export default Feed