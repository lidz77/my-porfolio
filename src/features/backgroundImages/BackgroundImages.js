import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {getImages, loadingBackgrounds, selectBackgrounds,} from './backgroundImagesSlice'

const Backgrounds = () => {
  const dispatch = useDispatch();
  const backgroundsIsLoading = useSelector(loadingBackgrounds);
  const imagesList = useSelector(selectBackgrounds);
  const [image, setImage] = useState('');
  let imagesLength = imagesList.length;
  useEffect(() => {
    dispatch(getImages());
    setImage(imagesList[0].urls.regular);
  }, [dispatch]);


  const handleClick = (e) => {
    let currentIndex = 0;
    console.log(currentIndex);
    console.log(imagesList);
    if(currentIndex > -1 && currentIndex < 10){
      currentIndex = currentIndex + parseInt(e.target.value);
      setImage(imagesList[currentIndex].urls.regular);
    }
  }

  if (backgroundsIsLoading === true) {
    return <p>Loading backgrounds</p>
  } else {
    return (
      <div className="background-container">
        <img src={image} alt="images"/>
        <button className="btn-image left" value={-1} onClick={handleClick}> &#8592; </button>
        <button className="btn-image right" value={1} onClick={handleClick}> &#8594; </button>
      </div>
    )
  }

}
Backgrounds.propTypes = {

}

export default Backgrounds
