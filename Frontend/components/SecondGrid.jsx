import React from "react";

const SecondGrid = () => {
  return (
    <>
      <div id="grid_s">
        <div className="heading">
          <h2 className="cathegory">Shop by Category</h2>
          <a href="" className="wom">
            Women
          </a>
          <a href="" className="wom">
            Men
          </a>
          <a href="" className="wom">
            Kids
          </a>
        </div>
        <div className="content">
          <a href="" className="post">
            <div id="first_post" className="sale">
              <img
                src="https://m.media-amazon.com/images/I/91WiLrNhdKL.jpg"
                className="pro_img"
              />
              <p className="caption">Krishna clothes 1</p>
            </div>
          </a>
          <a href="" className="post">
            <div id="first_post" className="sale">
              <img
                src="https://m.media-amazon.com/images/I/81Ha+CBh8bL._SL1500_.jpg"
                className="pro_img"
              />
              <p className="caption">Krishna clothes 1</p>
            </div>
          </a>
          <a href="" className="post">
            <div id="first_post" className="sale">
              <img
                src="https://brijya.com/wp-content/uploads/2022/02/IMG20220218133128.jpg"
                className="pro_img"
              />
              <p className="caption">Krishna clothes 1</p>
            </div>
          </a>{" "}
          <a href="" className="post">
            <div id="first_post" className="sale">
              <img
                src="https://www.amfez.com/assets/image/product/Display_6007f9f6baa91_1611135478.jpg"
                className="pro_img"
              />
              <p className="caption">Krishna clothes 1</p>
            </div>
          </a>
          <a href="" className="post">
            <div id="first_post" className="sale">
              <img
                src="https://www.amfez.com/assets/image/product/Display_6149d420c7b3c_1632228384.jpg"
                className="pro_img"
              />
              <p className="caption">Krishna clothes 1</p>
            </div>
          </a>
        </div>
        <div id="big_post">
          <div className="box">
            <div id="one_bp1" className="one_bp">
              <p className="price_tag">
                <span className="canc">$99.00</span>$59.00
              </p>
            </div>
            <p className="bp_cap">
              Ankara dresses{" "}
              <span className="shop">
                Shop now <i className="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </div>
          <div className="box">
            <div id="one_bp2" className="one_bp">
              <p className="price_tag">
                <span className="canc">$99.00</span>$59.00
              </p>
            </div>
            <p className="bp_cap">
              Leather dresses
              <span className="shop">
                Shop now <i className="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondGrid;
