import { Link } from "react-router-dom"
import Newsletter from "../Newsletter"

const Footer = () => {
  return (
    <footer className="bg-gray-200 relative mt-56 md:mt-36">
        <div className="absolute -translate-y-1/2  w-full">
            <Newsletter />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 pt-56 pb-8 grid grid-cols-2 items-start gap-8 md:pt-40 lg:grid-cols-6 lg:gap-14">
            <div className="col-span-2 flex flex-col gap-4 md:justify-center items-center lg:items-start lg:max-w-64">
                <h3 className="font-integral text-3xl relative -top-3">SHOP.CO</h3>
                <p className="text-black/60">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className="flex gap-4 items-center">                
                    <Link to={"#"} className="group bg-white border border-gray-400 p-2 rounded-full hover:bg-black">
                        <svg className="group-hover:fill-white" width="12" height="10" viewBox="0 0 12 10"><path d="M11.207 1.567a5.102 5.102 0 0 1-1.327.372c.466-.279.838-.721 1.001-1.257a5.045 5.045 0 0 1-1.466.559A2.32 2.32 0 0 0 7.739.519a2.285 2.285 0 0 0-2.282 2.282c0 .186.023.349.07.512A6.522 6.522 0 0 1 .801.915C.615 1.265.5 1.637.5 2.055c0 .792.396 1.49 1.024 1.91a2.694 2.694 0 0 1-1.047-.28v.024a2.3 2.3 0 0 0 1.839 2.258c-.187.046-.396.07-.606.07-.14 0-.302-.024-.442-.047.303.908 1.14 1.583 2.142 1.583a4.658 4.658 0 0 1-2.84.978c-.187 0-.373 0-.536-.024a6.478 6.478 0 0 0 3.515 1.025c4.214 0 6.518-3.492 6.518-6.519v-.302a4.18 4.18 0 0 0 1.141-1.164Z"/></svg>
                    </Link>
                    <Link to={"#"} className="group bg-white border border-gray-400 p-2 rounded-full hover:bg-black">
                        <svg className="group-hover:fill-white" width="13" height="13" viewBox="0 0 8 13"><path d="M2.709 12.887V7.334H.839V5.17h1.87V3.574C2.709 1.72 3.84.713 5.492.713c.792 0 1.472.059 1.67.085v1.936H6.016c-.898 0-1.072.427-1.072 1.054V5.17h2.143l-.28 2.164H4.945v5.553H2.709Z"/></svg>
                    </Link>
                    <Link to={"#"} className="group bg-white border border-gray-400 p-2 rounded-full hover:bg-black">
                        <svg className="group-hover:fill-white" width="14" height="15" viewBox="0 0 14 15"><path d="M7 2.031c1.81 0 2.024.007 2.738.04.43.005.855.083 1.258.233a2.244 2.244 0 0 1 1.286 1.285c.15.403.228.829.233 1.258.032.715.04.93.04 2.738 0 1.809-.007 2.023-.04 2.737-.005.43-.084.855-.233 1.258a2.242 2.242 0 0 1-1.286 1.286c-.403.15-.828.228-1.258.233-.714.033-.928.04-2.737.04-1.81 0-2.023-.007-2.738-.04a3.756 3.756 0 0 1-1.258-.233A2.243 2.243 0 0 1 1.72 11.58a3.758 3.758 0 0 1-.233-1.258c-.032-.714-.04-.928-.04-2.737 0-1.809.008-2.023.04-2.738.006-.43.084-.855.233-1.258a2.243 2.243 0 0 1 1.286-1.285c.403-.15.829-.228 1.258-.234.715-.032.93-.04 2.738-.04ZM7 .81c-1.838 0-2.07.007-2.792.04a4.974 4.974 0 0 0-1.645.315c-.452.17-.861.437-1.2.781a3.318 3.318 0 0 0-.782 1.2 4.974 4.974 0 0 0-.314 1.645c-.033.722-.04.954-.04 2.793 0 1.838.007 2.07.04 2.792.011.563.118 1.119.315 1.646.17.452.437.861.782 1.2.338.344.747.61 1.2.78a4.974 4.974 0 0 0 1.644.316c.723.032.954.04 2.793.04 1.84 0 2.07-.007 2.793-.04a4.975 4.975 0 0 0 1.646-.315 3.468 3.468 0 0 0 1.98-1.982 4.974 4.974 0 0 0 .315-1.645c.032-.722.04-.954.04-2.793 0-1.838-.008-2.07-.04-2.792a4.974 4.974 0 0 0-.316-1.646 3.32 3.32 0 0 0-.781-1.2 3.319 3.319 0 0 0-1.2-.78A4.974 4.974 0 0 0 9.793.85C9.071.818 8.839.81 7.001.81Z"/><path d="M7.002 4.107a3.479 3.479 0 1 0 0 6.958 3.479 3.479 0 0 0 0-6.958Zm0 5.737a2.258 2.258 0 1 1 0-4.516 2.258 2.258 0 0 1 0 4.516ZM10.618 4.782a.813.813 0 1 0 0-1.626.813.813 0 0 0 0 1.626Z"/></svg>
                    </Link>
                    <Link to={"#"} className="group bg-white border border-gray-400 p-2 rounded-full hover:bg-black">
                        <svg className="group-hover:fill-white" width="14" height="14" viewBox="0 0 14 14"><path fillRule="evenodd" clipRule="evenodd" d="M6.607.81a6.464 6.464 0 0 0-6.48 6.48c0 2.862 1.863 5.292 4.428 6.156.324.054.432-.135.432-.324v-1.107c-1.81.405-2.187-.864-2.187-.864-.297-.756-.73-.945-.73-.945-.593-.405.055-.405.055-.405.648.054.999.675.999.675.567 1 1.512.702 1.89.54.054-.432.216-.702.405-.864-1.431-.162-2.943-.729-2.943-3.213 0-.702.243-1.296.675-1.728-.054-.162-.297-.81.054-1.728 0 0 .54-.162 1.782.675a6.506 6.506 0 0 1 1.62-.216c.54 0 1.107.081 1.62.216 1.242-.837 1.782-.675 1.782-.675.35.891.135 1.54.054 1.728.405.46.675 1.026.675 1.728 0 2.484-1.512 3.024-2.97 3.186.243.19.432.594.432 1.188v1.782c0 .162.108.378.459.324a6.448 6.448 0 0 0 4.428-6.129c0-3.59-2.89-6.48-6.48-6.48Z"/></svg>
                    </Link>
                </div>
            </div>
            
            <ul className="flex flex-col gap-2 text-black/60 sm:items-center lg:items-start">
                <li className="font-medium mb-2 text-black">COMPANY</li>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
            </ul>
            <ul className="flex flex-col gap-2 text-black/60 sm:items-center lg:items-start">
                <li className="font-medium mb-2 text-black">HELP</li>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
            <ul className="flex flex-col gap-2 text-black/60 sm:items-center lg:items-start">
                <li className="font-medium mb-2 text-black">FAQ</li>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
            </ul>
            <ul className="flex flex-col gap-2 text-black/60 sm:items-center lg:items-start">
                <li className="font-medium mb-2 text-black">RESOURCES</li>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer