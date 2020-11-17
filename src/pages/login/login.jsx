import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [infoUser, setInfoUser] = useState(null);
  const { taiKhoan, matKhau } = inputs;
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      inputs
    ).then(res => setInfoUser(res.data))
    
      history.push('/admin')
    

  };

  console.log(infoUser)

  return (
    <div>
      <p> Dang Nhap</p>
      <input
        type="text"
        name="taiKhoan"
        value={taiKhoan}
        onChange={handleChange}
      />
      <input
        type="password"
        name="matKhau"
        value={matKhau}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Dang Nhap
      </button>
    </div>
  );
}
