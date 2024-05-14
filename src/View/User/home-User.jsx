import React from "react";
import Lable from "../../components/paper/lable";
import SlideShow from "../../components/image/slideShow";
import ProductItem from "./Product/Product-Item";
function Home() {
    const data = [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
    ];
    return (
        <div className="Home-main">
            <SlideShow />
            <div className="freamItemMenu-1 horizontal-scroll-container">
                <div className="ItemSet">
                    <div className="Item-set1">456</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">asdas</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                </div>
            </div>
            <Lable title={"test"} text={"asdasdasd123123123"} />
            <div className="freamItemMenu horizontal-scroll-container">
                <div className="ItemSet">
                    <div className="Item-set1">456</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">asdas</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                </div>
                <div className="ItemSet">
                    <div className="Item-set1">456</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">asdas</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                    <div className="Item-set1">1231</div>
                </div>
            </div>
            <Lable title={"test"} text={"asdasdasd123123123"} />

            <div className="body-Product">
<div className="filter-Product">
    <div className="filter">
        <div>
    <div >123 45646</div>
    <div >123 asdasd</div>
    <div >123 asdasd</div>
    <div >123 asdasd </div>
    <div >123 asdasd</div>
    <div >123asdasdasd</div>

        </div>
    </div>
    <div className="filter">123</div>
    <div className="filter">123</div>
</div>

            <div className="Product-main">
         
                {data.map((item, i) => (
                    <ProductItem />
                ))}
            </div>
            </div>
        </div>
    );
}

export default Home;
