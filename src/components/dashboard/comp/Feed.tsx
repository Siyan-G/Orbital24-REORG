import { Box, IconButton, InputBase, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { CourseDetails } from "../../../ReactQuery/objects";
import SearchIcon from '@mui/icons-material/Search';
import Post from "./CourseContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";

const Feed = () => {
  const [items, setItems] = useState<CourseDetails[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [newInputValue, setNewInputValue] = useState(""); // Input value state

  useEffect(() => {
    console.log("Fetching initial data");
    axios
      .get("http://localhost:8181/api/mod?page=1")
      .then((res) => setItems(res.data.content))
      .catch((err) => console.error("Error fetching initial data:", err));
  }, []);

  const fetchMoreData = () => {
    console.log("Fetching more data");
    axios
      .get(`http://localhost:8181/api/mod?page=${index}`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data.content]);
        setHasMore(res.data.content.length > 0);
      })
      .catch((err) => console.error("Error fetching more data:", err));
    setIndex((prevIndex) => prevIndex + 1);
  };

  // const SearchBar = styled(Box)(({ theme }) => ({
  //   backgroundColor: "white",
  //   padding: "0 10px",
  //   borderRadius: "20px",
  //   width: "100%",
  //   maxWidth: "400px",
  //   display: "flex",
  //   alignItems: "center",
  //   boxShadow: theme.shadows[1],
  //   '&:hover': {
  //     boxShadow: theme.shadows[3],
  //   },
  // }));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewInputValue(event.target.value); // Update input value
  };

  const handleSearch = useCallback(() => {
    console.log("Searching with:", newInputValue);
    axios
      .get(`http://localhost:8181/api/mod/code?moduleCode=${newInputValue}`)
      .then((res) => {
        setItems(res.data);
        setHasMore(false); // Disable infinite scroll for search results
      })
      .catch((err) => console.error("Error performing search:", err));
  }, [newInputValue]);

  return (
    <Box
      p={3}
      justifyContent={'flex-start'}
      display={'flex'}
      flexDirection={'column'}
      alignContent={'flex-start'}
      flexGrow={1}
      maxWidth={'50%'}
    >
      <Box border={1} borderRadius={20} maxWidth={400} width={'100%'} alignItems={'center'} display={'flex'} padding={'0 10px'}>
        <InputBase 
          placeholder="Search Mods" 
          fullWidth
          value={newInputValue} // Controlled input value
          onChange={handleInputChange}
          inputProps={{ 'aria-label': 'search mods' }}
        />
        <IconButton type="button" aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
      >
        {items.map((item) => <Post course={item} key={item.moduleCode} />)}
      </InfiniteScroll>
    </Box>
  );
}

export default Feed;
