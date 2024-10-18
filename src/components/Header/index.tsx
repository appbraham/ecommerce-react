import Menubar from "../Menubar"
import Textfield from "../Textfield"

const Header = () => {
  return (
    <header className="max-w-[1440px] flex items-center justify-between gap-12 py-6 px-4 mx-auto">
        <div className="flex gap-4 items-center">
            <svg className="md:hidden" width="24" height="24" fill="none"><path d="M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12ZM3.75 7.125h16.5a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25Zm16.5 9.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25Z" fill="#000"/></svg>
            <span className="relative -top-1 font-integral text-2xl align-middle md:text-3xl">SHOP.CO</span>
        </div>
        <Menubar />
        <Textfield inputType="text" label="Search for products..." />
        <div className="flex gap-3">
            <svg className="lg:hidden" width="24" height="24" fill="none"><path d="m21.796 20.204-4.452-4.454a8.636 8.636 0 1 0-1.594 1.594l4.456 4.457a1.126 1.126 0 1 0 1.594-1.594l-.004-.003ZM4.125 10.5a6.375 6.375 0 1 1 6.375 6.375A6.381 6.381 0 0 1 4.125 10.5Z" fill="#000"/></svg>
            <svg width="24" height="24" fill="none"><path d="M9.375 20.25a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm7.875-1.875a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm4.825-11.294-2.558 8.316a2.614 2.614 0 0 1-2.51 1.853H7.775a2.637 2.637 0 0 1-2.525-1.904L2.045 4.125h-.92a1.125 1.125 0 0 1 0-2.25h1.202a1.882 1.882 0 0 1 1.803 1.36l.683 2.39H21a1.125 1.125 0 0 1 1.075 1.456Zm-2.598.794H5.455l1.959 6.853a.375.375 0 0 0 .36.272h9.233a.375.375 0 0 0 .36-.264l2.11-6.861Z" fill="#000"/></svg>
            <svg width="24" height="24" fill="none"><path d="M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875ZM7.46 18.428a5.625 5.625 0 0 1 9.08 0 7.848 7.848 0 0 1-9.08 0Zm1.915-7.178a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Zm8.813 5.62a7.827 7.827 0 0 0-2.72-2.196 4.875 4.875 0 1 0-6.937 0 7.827 7.827 0 0 0-2.719 2.195 7.875 7.875 0 1 1 12.366 0h.01Z" fill="#000"/></svg>
        </div>
    </header>
  )
}

export default Header