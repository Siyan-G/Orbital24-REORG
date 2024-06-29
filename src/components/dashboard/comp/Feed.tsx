import { Box, IconButton, InputBase, styled } from "@mui/material"

import { useInView } from 'react-intersection-observer'
import { useCallback, useEffect, useState } from "react"
import { CourseDetails } from "../../../ReactQuery/objects"
import SearchIcon from '@mui/icons-material/Search';
import Post from "./CourseContainer"
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from "axios"

const Feed = () => {
  const [items, setItems] = useState<CourseDetails[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

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

  const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    alignItems: "center",
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[3],
    },
  }));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = useCallback(() => {
    setSearchTerm(inputValue);
    // Make API call for search
    axios
      .get(`http://localhost:8081/api/mod/code?moduleCode=${inputValue}`)
      .then((res) => {
        setItems(res.data);
        setHasMore(false); // Disable infinite scroll for search results
      })
      .catch((err) => console.log(err));
  }, [inputValue]);

  return (
    
    <Box flex={4} p={2} 
      justifyContent={'center'}
      display={'flex'}
      flexDirection={'column'}
      >
        <SearchBar>
        <InputBase 
          placeholder="Search Mods" 
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          inputProps={{ 'aria-label': 'search mods' }}
        />
        <IconButton type="button" aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </SearchBar>
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