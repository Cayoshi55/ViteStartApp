


const ProductItem = () => {

      const fn = (e) => {
            console.log("ssssssssss")
      }

      return (<>
     
                <div className="Product-Item" onClick={fn} value="123">
                    <div className="top-logoItem">
                        <div className="Item-l">45</div>
                        <div className="Item-r">49</div>
                    </div>
                    <div className="image-product">sss</div>
                    <div className="bt-logoItem">
                        <div className="Item-l">12</div>
                        <div className="Item-r">13</div>
                    </div>
                    <div className="Product-info">
                      
                        <div className="Product-detail">  <span className="status-sell">logo</span>detail asdasdsdasd asdasdasdsd</div>
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
      
      </>)
}

export default ProductItem;