import { httpClient } from "./httpClient";

const CategorieCsCourseAPI = "/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
const GetListCoursehttp = "/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
//const GetInfoCoursehttp = "/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=LTC_GP01"

export function getCategoriesCoursehttp() {
  return httpClient.get(CategorieCsCourseAPI);
}

export function getListCoursehttp() {
  return httpClient.get(GetListCoursehttp);
}

export function getInfoCoursehttp(id) {
  return httpClient.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
}


