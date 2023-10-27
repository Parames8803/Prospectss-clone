import React,{useState} from "react";
import LimitedOffer from "../components/LimitedOffer";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pageType, setPageType] = useState('Signup for free')

    const handleLinkHover = (hovered) => {
      setIsModalVisible(hovered);
    };
    
    return (
        <>
            <LimitedOffer />
            <Navbar handleLinkHover={handleLinkHover} type={pageType}/>
            <Modal
                isVisible={isModalVisible}
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
            />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
