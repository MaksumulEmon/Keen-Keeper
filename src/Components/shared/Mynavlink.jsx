
import { NavLink } from 'react-router';

const Mynavlink = ({ to, children ,className = ""}) => {
    return (
        <div>

            <NavLink to={to} className={({ isActive }) => `flex items-center gap-1 text-[#64748B] px-3 py-2 rounded ${isActive ? " bg-[#244D3F] text-white" : ""} ${className} `}>{children}</NavLink>

        </div>
    );
};

export default Mynavlink;