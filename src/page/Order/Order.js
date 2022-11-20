import "./Order.css";
import Warpper from "../../Warpper/Warpper";
export default function Order() {
  return (
    <div>
        <Warpper/>
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Product</h1>
          <button className="productAddButton">Create</button>
      </div>
      <div className="orderTop">
          <div className="orderTopLeft">
          </div>
          <div className="orderTopRight">
              
              <div className="orderInfoBottom">
                  <div className="orderInfoItem">
                      <span className="orderInfoKey">id:</span>
                      <span className="orderInfoValue">123</span>
                  </div>
                  <div className="orderInfoItem">
                      <span className="orderInfoKey">sales:</span>
                      <span className="orderInfoValue">5123</span>
                  </div>
                  <div className="orderInfoItem">
                      <span className="orderInfoKey">active:</span>
                      <span className="orderInfoValue">yes</span>
                  </div>
                  <div className="orderInfoItem">
                      <span className="orderInfoKey">in stock:</span>
                      <span className="orderInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="orderBottom">
          <form className="orderForm">
              <div className="orderFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="orderFormRight">
                  <div className="orderUpload">
            
                      <label htmlFor="file">
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="orderButton">Update</button>
              </div>
          </form>
      </div>
    </div>
    </div>
  );
}