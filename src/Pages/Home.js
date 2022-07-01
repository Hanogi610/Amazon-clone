import Sidebar from "../Components/Sidebar";
import {useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import './Home.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Product from "../Components/Product";
import { useStateValue } from "../Components/React Context API/StateProvider";

export default function Home(){
    const [active, setActive] = useState(false);
    const [{ user }] = useStateValue();
    const onOpen = () =>{
        if(!active){
            setActive(true);
        }else{
            setActive(false);
        }
    }  
    const theme = createTheme({
      palette: {
        primary: {
          main: '#fff',
        },
      },
    });
    return (
      <div>
        <Sidebar active={active} setActive={setActive} />
        <div className="home__nav">
        <ThemeProvider theme={theme}>
          <Button variant="text" startIcon={<MenuIcon />} onClick={onOpen}>
            All
          </Button>
          <Button href="#" target="_blank" variant="text">Text</Button>
          <Button href="#" target="_blank" variant="text">Today's Deal</Button>
          <Button href="#" target="_blank" variant="text">Buy Again</Button>
          <Button href="#" target="_blank" variant="text">Customer Service</Button>
          <Button href="#" target="_blank" variant="text">Browsing History</Button>
          <Button href="#" target="_blank" variant="text">{!user ? 'Guest' : user.email}'s Amazon</Button>
          <Button href="#" target="_blank" variant="text">Gift Cards</Button>
          <Button href="#" target="_blank" variant="text">Registry</Button>
          <Button href="#" target="_blank" variant="text">Sell</Button>
          </ThemeProvider>
        </div>
        <Swiper
        className="home__swiper"
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onReachEnd={() => console.log(1)}
        >
          <SwiperSlide key="slide1"><img className="home__img" src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide key="slide2"><img className="home__img" src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide key="slide3"><img className="home__img" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide key="slide4"><img className="home__img" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide key="slide5"><img className="home__img" src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide key="slide6"><img className="home__img" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" /></SwiperSlide>
        </Swiper>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        </div>
    );
}