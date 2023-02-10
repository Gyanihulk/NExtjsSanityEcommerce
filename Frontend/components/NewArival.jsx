import React from "react";

const NewArival = () => {
  return (
    <div id="display_pro">
      <h2 className="new_arr">New Arrivals</h2>
      <div id="flex">
        <div id="first_pro" className="one">
          <div className="img" id="img1">
            <span className="sale_tag">Sale!</span>
            <span className="like_btn">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <p className="caption_">
            Green gown <br /> <span className="cancelled">$50.00</span>{" "}
            <span className="new">$30.00</span>
          </p>
        </div>

        <div id="first_pro" className="one">
          <div className="img" id="img2">
            <span className="sale_tag">Sale!</span>
            <span className="like_btn">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <p className="caption_">
            Elegant Top <br /> <span className="cancelled">$65.00</span>{" "}
            <span className="new">$40.00</span>
          </p>
        </div>

        <div id="first_pro" className="one">
          <div className="img" id="img3">
            <span className="sale_tag">Sale!</span>
            <span className="like_btn">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <p className="caption_">
            Get sporty <br /> <span className="cancelled">$45.00</span>{" "}
            <span className="new">$35.00</span>
          </p>
        </div>

        <div id="first_pro" className="one">
          <div className="img" id="img4">
            <span className="sale_tag">Sale!</span>
            <span className="like_btn">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <p className="caption_">
            Chic but silk <br /> <span className="cancelled">$70.00</span>{" "}
            <span className="new">$55.00</span>
          </p>
        </div>

        <div id="first_pro" className="one">
          <div className="img" id="img5">
            <span className="sale_tag">Sale!</span>
            <span className="like_btn">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>
          <p className="caption_">
            Show up classNamey <br /> <span className="cancelled">$54.00</span>{" "}
            <span className="new">$43.00</span>
          </p>
        </div>
      </div>
      <div id="sec_main">
        <div className="first_box">
          <img src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="pro10" alt="a white outfit"/>
        </div>
        <div className="sec_box">
          <span className="gray">PERFECT SUMMER</span>
          <p className="head">Summer Days Look</p>
          <div id="white" className="one">
            <div className="img" id="img6">
              <span className="sale_tag2">Sale!</span>
              <span className="like_btn">
                <i className="fa-regular fa-heart"></i>
              </span>
            </div>
            <p className="caption">
              Textile dress
              <br /> <span className="cancelled">$54.00</span>{" "}
              <span className="new">$43.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;
