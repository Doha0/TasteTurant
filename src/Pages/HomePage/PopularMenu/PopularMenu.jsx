
import MenuItem from '../../../Components/MenuItem/MenuItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // console.log(menu);
    return (
        <section className="mb-12">

            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10 justify-center items-center  my-8'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='grid justify-items-center'>
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;