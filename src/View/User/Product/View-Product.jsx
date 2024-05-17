import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "../../../css/User/Product/view-product.css";
import Lable from "../../../components/paper/lable"
import ProductItem from "../Product/Product-Item";
const ViewProduct = () => {
    const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1","1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    return (
        <>
            <div className="conten">
                <div className="row">
                    <div className="show-image">
                        <div className="img-view">
                            <img src="#" /> asd
                        </div>
                        <div className="over-image horizontal-scroll-container">
                             
                             
                       <div className="list-box ">
                              <div className="list-imgbox">1 12 324</div>
                              <div className="list-imgbox">2 12 324</div>
                              <div className="list-imgbox">3 12 324</div>
                              <div className="list-imgbox">4 12 324</div>
                              <div className="list-imgbox">5 12 324</div>
                              <div className="list-imgbox">6 12 324</div>
                              <div className="list-imgbox">7 12 324</div>
                              <div className="list-imgbox">8 12 324</div>
                              <div className="list-imgbox">9 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                              <div className="list-imgbox">10 12 324</div>
                        </div> 
                        </div>
                        
                    </div>
                    <div className="detail-Product">
                        <div className="row">
                            <div>title</div>
                            <div>asdasd</div>
                        </div>
                        <div className="row">
                            <div>title</div>
                        </div>
                        <div className="row">
                            <div>title</div>
                        </div>
                        <div className="row">
                            <div>title</div>
                        </div>
                    </div>
                </div>
                <Lable title={"test"} text={"asdasdasd123123123"} />
                <Lable title={"test"} text={"asdasdasd123123123"} />
                <Lable title={"test"} text={"asdasdasd123123123"} />

                <div className="Product-main">
                    {data.map((item, i) => (
                        <ProductItem key={"asd" + i} i={i} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ViewProduct;
