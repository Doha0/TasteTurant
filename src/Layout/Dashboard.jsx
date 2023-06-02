import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart } from 'react-icons/fa';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                        </li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;