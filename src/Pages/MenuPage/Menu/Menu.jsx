import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const offers = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');


    return (
        <div>
            <Helmet>
                <title>TasteTurant | Menu</title>
            </Helmet>
            {/* main cover image */}
            <Cover img={menuImg} title="our menu"></Cover>
            {/* offers */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offers} ></MenuCategory>
            {/* dessert */}
            <MenuCategory items={desserts} title={'dessert'} img={dessertImg} ></MenuCategory>
            {/* pizzas */}
            <MenuCategory items={pizzas} title={'pizza'} img={pizzaImg} ></MenuCategory>
            {/* salads */}
            <MenuCategory items={salads} title={'salad'} img={saladImg} ></MenuCategory>
            {/* soups */}
            <MenuCategory items={soups} title={'soup'} img={soupImg} ></MenuCategory>

        </div>
    );
};

export default Menu;