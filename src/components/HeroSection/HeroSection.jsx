import React, { useEffect } from 'react';

// @React-Redux
import { useDispatch, useSelector } from 'react-redux';

// @Actions
import { fetchSlides } from '../../actions/slides';

// @Components
import Item from './Item';

// @Packages
import Carousel from "react-material-ui-carousel";



const HeroSection = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.slides.payload)

    useEffect(() => {
        dispatch(fetchSlides());
    }, [dispatch]);

    let slides = state === undefined ? null : state.map((item) => {
        return item.slider.map(photo => {
            return photo.formats.large.url
        })
    })

    let data = []
    if(slides === null){
        return null
    }else{
        slides.map((item) => {
            item.map((element) => {
                data.push(element);
                return null;
            });
            return null
        });
    }

    return (
      <>
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible={true}
          timeout={3000}
          interval={1700}
        >
          {data.map((url, i) => (
            <Item key={i} url={url} />
          ))}
        </Carousel>
      </>
    );
};

export default HeroSection;