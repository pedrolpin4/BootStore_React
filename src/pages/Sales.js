import { useState } from "react"
import Header from "../components/Header"
import BottomPage from "../components/BottomPage"
import SalesBody from "./SalesBody"
import ProductModal from "../components/ProductModal"

export default function Sales ({sidebar, setSidebar}) {
    const[showModal, setShowModal] = useState(false);
    const [content, setContent] = useState('');


    return(
        <>
            <Header sidebar={sidebar} setSidebar={setSidebar} content = {content} setContent = {setContent}/>
            <SalesBody sidebar = {sidebar} setSidebar = {setSidebar} setShowModal = {setShowModal}/>
            <BottomPage />
            <ProductModal showModal = {showModal} setShowModal = {setShowModal} setSidebar = {setSidebar} setContent = {setContent} />
        </>
    )
}