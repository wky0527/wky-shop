import React,{FC} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyList from "./my";
const My: FC = () => {
    return (
        <div>
            <Header title='我的'/>
            <MyList/>
            <Footer/>
        </div>
    )
}
export default My;
