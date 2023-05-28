import React from 'react';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-12'>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-20'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;