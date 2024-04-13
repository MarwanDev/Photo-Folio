import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-red-500 self-stretch flex w-full mt-36 px-16 py-9 justify-end items-end max-md:max-w-full max-md:mt-10 max-md:px-5 gap-10">
      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram style={{ color: '#fff', width: 50, height: 35 }} />
      </a>
      <a href="https://www.tiktok.com/" target="_blank">
        <FaTiktok style={{ color: '#fff', width: 50, height: 35 }} />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <FaYoutube style={{ color: '#fff', width: 50, height: 35 }} />
      </a>
      <a href="https://www.pinterest.com/" target="_blank">
        <FaPinterest style={{ color: '#fff', width: 50, height: 35 }} />
      </a>
    </div>
  )
}

export default Footer