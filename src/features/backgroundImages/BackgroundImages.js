import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getImages, loadingBackgrounds, selectBackgrounds,} from './backgroundImagesSlice'

const Backgrounds = () => {
  const dispatch = useDispatch();
  const backgroundsIsLoading = useSelector(loadingBackgrounds);
  const imagesList = useSelector(selectBackgrounds);
  const [imageIndex, setImageIndex] = useState(0);
  let imagesLength = imagesList.length - 1 ;
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);


  const handleClick = (e) => {
    if(imageIndex !== 0 || imageIndex !== imagesLength){
      setImageIndex(prev => prev + parseInt(e.target.value));
    }
  }

  if (backgroundsIsLoading) {
    return <p>Loading backgrounds</p>
  } else {
    return (
      <div className="background-container">
        <img src={imagesList[imageIndex]} alt="images"/>
        <button disabled={imageIndex === 0} className="btn-image left" value={-1} onClick={handleClick}> &#8592; </button>
        <button disabled={imageIndex === imagesLength} className="btn-image right" value={1} onClick={handleClick}> &#8594; </button>
      </div>
    )
  }

}
Backgrounds.propTypes = {

}

export default Backgrounds
