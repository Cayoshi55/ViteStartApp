import "../../../css/User/Product/Product-Item.css";
import Box from "@mui/material/Box";
const ProductItem = (i) => {
    const fn = (e) => {
        console.log("ssssssssss");
    };
    //   console.log(i.i)
    return (
        <div className="Product-Item" onClick={fn} value="123">
            <div key={"kt" + i.i} className="top-logoItem">
                <div className="Item-l">logo</div>
                <div className="Item-r">logo</div>
            </div>
            <div className="image-product">img</div>
            <div className="bt-logoItem">
                <div className="Item-l">logo</div>
                <div className="Item-r">logo</div>
            </div>
            <div className="Product-info">
                <div className="Product-detail">
                    {" "}
                    <span className="status-sell">logo</span>detail asdasdsdasd asdasdasdsd
                </div>
            </div>
            <div className="pro-item">
                <div>123456</div>
                <div>123456</div>
            </div>
            <div className="price-item">
                <div className="fprice-item">
                    <div className="prices">฿1,500</div>
                    <div className="price-issell">ขายแล้ว 94</div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
