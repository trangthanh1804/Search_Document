import React from "react";
import "./list-document.scss";
function listDocument() {
  return (
    <div className="document container">
      <div className="line"></div>
      <h3 className="mt-4 ">Xác Nhận Thông Tin</h3>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-6 mx-auto document-content">
            <div className="row">
              <div className="col-6">
                <label>Loại Văn Bản : </label>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="txtNamSinh" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Cơ Quan Ban Hành : </label>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="txtHoTen" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Ngày Ký : </label>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="txtHoTen" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Số Biên Nhận : </label>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="txtHoTen" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Tình Trạng : </label>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <input type="text" className="form-control" id="txtHoTen" />
                </div>
              </div>
            </div>
            <div className="document-item-btn">
              <div className="document-btn">
                <button className="btn btn-secondary mr-5 ">TRA CỨU</button>
              </div>
              <div className="document-btn">
                <button className="btn btn-light">NHẬP LẠI</button>
              </div>
            </div>
          </div>
          <div className="col-6 document-item">
            <p>
              Bạn hãy nhập chính xác số biên nhận trên phiếu biên nhận và bấm
              nút "Tra cứu" để xem thông tin hồ sơ của bạn.
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
export default listDocument;
