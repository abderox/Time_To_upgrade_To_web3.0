import logo from "../../images/logo.png";

const Footer = () => {
    return (

<footer className="p-4 bg-white rounded-tl-tr-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
<div className="sm:flex sm:items-center sm:justify-between">
<a href="https://flowbite.com" target="_blank" className="flex items-center mb-4 sm:mb-0">
<img
          src={logo}
          alt="logo"
          className=" h-20 cursor-pointer mr-4 h-8"
        />
</a>
<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
<li>
<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
</li>
<li>
<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
</li>
<li>
<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
</li>
<li>
<a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
</li>
</ul>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" className="hover:underline">Gifty</a>. All Rights Reserved.
</span>
</footer>

    );
  };
  
  export default Footer;