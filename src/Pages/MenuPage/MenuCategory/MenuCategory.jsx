import React from 'react';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    console.log(title);
    return (
        <div className='pt-12'>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 mt-20 mb-8'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className='flex justify-center items-center mb-20'>
                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-slate-900 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;