import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, IconButtonProps,Menu,MenuItem,Stack,Typography, styled } from "@mui/material";
import React, { FC, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { red } from "@mui/material/colors"; 
import { Padding } from "@mui/icons-material";
import { CourseDetails } from "../../../ReactQuery/objects";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  interface CourseProps extends React.HTMLAttributes<HTMLParagraphElement> {
    course: CourseDetails,
    innerRef?: React.Ref<HTMLParagraphElement>
  }

  const Post: FC<CourseProps> = ({course, innerRef, ...props}) => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    return (
      <Box 
        key={course.moduleCode} 
        ref={innerRef} 
        p={1}
        flexGrow={1}
        >
      <Card sx={{ 
              border: '1px light gray',
              borderRadius: '16px', 
              boxShadow: 2,
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              // clipPath: 'polygon(0 10px, 10px 10px, 10px 0,calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px,100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%,10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px))'
            }}>
              <Stack direction={'column'}>
        <CardHeader
          action={
            <Box>
            <IconButton onClick={handleClick}>
              <AddIcon sx={{ color: 'grey.500' }} />
            </IconButton>
            <Menu 
             anchorEl={anchorEl}
             open={open}
             onClose={()=>setAnchorEl(null)}>
            </Menu>
            </Box>
          }
          title={course.moduleCode}
          subheader={course.title}
        />
        <Divider orientation="horizontal" flexItem />
        
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"} spacing={10}>
          <Stack 
            direction={"row"} 
            spacing={10}
            justifyContent={"space-evenly"}
            >
              <Stack> 
                <strong>Units:</strong>
                <Typography paragraph>{parseFloat(course.moduleCredit).toFixed(1)}</Typography>
              </Stack>
              <Stack>
                <strong>Workload:</strong>
                <Typography paragraph>{course.workload}</Typography>
              </Stack>
              <Stack>
                <strong>Exam Date:</strong>
                <Typography paragraph>*testdate 15122001</Typography>
              </Stack>
            
            
          </Stack>
          <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        </Stack>
        </CardContent>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
             Department: {course.faculty}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
            {course.description}
            </Typography>
          </CardContent>
        </Collapse>
        </Stack>
      </Card>
      </Box>
    );
  }

export default Post