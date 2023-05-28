
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">

            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            
            <div className='grid justify-center items-center  mt-8'>
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;