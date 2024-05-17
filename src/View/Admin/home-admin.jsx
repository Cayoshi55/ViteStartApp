import React from "react";
import Lable from "../../components/paper/lable";
import SlideInImage from "../User/SlideInImage";

function Home() {
    return (
        <>
            <h1>Welcome Home Admin</h1>
        <Lable title={"test"} text={"asdasdasd123123123"} />
        <Lable title={"test"} text={"asdasdasd123123123"} />
        <Lable title={"test"} text={"asdasdasd123123123"} />
        <Lable title={"test"} text={"asdasdasd123123123"} />
        <p>Scroll down to see the image slide in.</p>
        <div className="spacer"></div>
        <SlideInImage src="your-image.jpg" alt="Sliding Image" />
        </>
    );
}

export default Home;
