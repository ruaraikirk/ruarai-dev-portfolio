import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: "secondaryLight",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const tileData = [
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
    title: "Image",
    link: "https://reactjs.org/"
  },
];

const TechnologiesGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}
        {/*  <ListSubheader component="div">Front-End</ListSubheader>*/}
        {/*</GridListTile>*/}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon onClick={() => window.open(tile.link)}/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default TechnologiesGrid
