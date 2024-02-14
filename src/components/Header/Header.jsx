// Importing the necessary styles and images
import './Header.css';
import linkedinLogo from "../../assets/images/linkedin-svgrepo-com.svg";
import instagramLogo from "../../assets/images/instagram-167-svgrepo-com.svg";
import csiLogo from "../../assets/images/CSI-logo.png";

// Header component definition
function Header() {
    return (
        <>
            {/* Navigation bar with flex layout and styling */}
            <nav className="w-full h-50 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
                {/* Left section containing the CSI logo */}
                <div className="">
                    {/* Link wrapping the CSI logo */}
                    <a href="/" className="flex items-center">
                        {/* CSI logo image with responsive height */}
                        <img
                            className="h-20 py-1"
                            src={csiLogo}
                            alt="CSI Logo"
                        />
                    </a>
                </div>

                {/* Navigation links for larger screens */}
                <ul className="md:flex hidden font-semibold">
                    {/* Individual navigation items */}
                    <li className="mx-[10px] cursor-pointer text-2xl">Home</li>
                    <li className="mx-[10px] cursor-pointer text-2xl">About us</li>
                    <li className="mx-[10px] cursor-pointer text-2xl">Our Team</li>
                    <li className="mx-[10px] cursor-pointer text-2xl">Events</li>
                    <li className="mx-[10px] cursor-pointer text-2xl">Gallery</li>
                </ul>

                {/* Right section containing social media logos */}
                <div>
                    {/* Flex container for social media logos with spacing */}
                    <div className="flex items-center gap-2">
                        {/* LinkedIn logo with a link to the society's LinkedIn page */}
                        <a href="https://www.linkedin.com/company/csi-innowave/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} className="h-12" alt="LinkedIn Logo" />
                        </a>
                        {/* Instagram logo with a link to the society's Instagram page */}
                        <a href="https://www.instagram.com/mait_csi_innowave/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} className="h-10" alt="Instagram Logo" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

// Exporting the Header component
export default Header;
