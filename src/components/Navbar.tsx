import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="justify-center items-stretch bg-white self-stretch flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
      <div className="flex items-center justify-between gap-5 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <NavLink to="/" className="text-red-500 text-4xl font-bold grow shrink basis-auto my-auto md:text-5xl max-md:text-3xl" onClick={() => {
          navigate('/');
          window.location.reload();
        }}>
          JOHN DOE
        </NavLink>
        <div className="justify-end self-stretch py-10 max-md:max-w-full max-md:pl-5">

          <ul className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 hidden lg:flex">
            {['portfolio', 'about', 'contact'].map((item) => (
              <li className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0" key={`link-${item}`}>
                <div />
                <NavLink to={`/${item}`} onClick={() => setActiveLink(item)}
                  className={`text-stone-500 text-lg whitespace-nowrap max-md:mt-10 uppercase ${activeLink === item && 'font-bold'}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <HiMenuAlt4 onClick={() => setToggle(true)} className="block lg:hidden" />

        {toggle && (
          <nav className="fixed bg-white z-1 w-full h-full pt-40">
            <HiX onClick={() => setToggle(false)} className="fixed top-0 right-0 m-4" />
            <ul className="lg:hidden flex flex-col items-center justify-center h-full gap-3">
              {['portfolio', 'about', 'contact'].map((item) => (
                <li key={item} className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <NavLink to={`/${item}`} onClick={() => {
                    setToggle(false);
                    setActiveLink(item);
                  }} className="self-center uppercase">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;