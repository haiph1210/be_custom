import React from 'react';
import './header.css'

function Header() {
    return (
        <header className="header wF__ header--show">
            <div className="container container d-flex align-items-center">
                <a className="logo" href="https://be.com.vn">
                    <img alt="Be" className="standard" src="https://imgmainsite.be.com.vn/2023/03/2d01eebb-logo2022-07-1.png" />
                </a>
                <nav className="nav ml-auto mr-auto">
                    <ul>
                        <li className="dropdown 108 menu-about">
                            <a className="item-d" href="https://be.com.vn/ve-be/" title="Công ty">Công ty</a>
                        </li>
                        <li className="dropdown 111 menu-personal active">
                            <a className="item-d" href="#" title="Khách hàng cá nhân">Khách hàng cá nhân</a>
                            <div aria-labelledby="dropdownMenu2" className="dropdown-menu animated slideInUp">
                                <a className="111" href="https://be.com.vn/khach-hang-ca-nhan/tin-tuc-bao-chi/" title="Thông tin mới nhất">Thông tin mới nhất</a>
                                <a className="111 current active active-child" href="https://be.com.vn/khach-hang-ca-nhan/dich-vu-van-chuyen/" title="Vận chuyển">Vận chuyển</a>
                                <a className="111" href="https://be.com.vn/khach-hang-ca-nhan/dich-vu-giao-hang/" title="Giao hàng">Giao hàng</a>
                                <a className="111" href="https://food.be.com.vn/" title="Giao đồ ăn">Giao đồ ăn</a>
                                <a className="111" href="https://be.com.vn/khach-hang-ca-nhan/ve-may-bay/" title="Vé Máy Bay">Vé Máy Bay</a>
                                <a className="111" href="https://be.com.vn/khach-hang-ca-nhan/beloyalty/" title="beLoyalty">beLoyalty</a>
                                <a className="111" href="https://be.com.vn/tin-tuc/ngan-hang-so-cake-by-vpbank/" title="Ngân hàng số Cake by VPbank">Ngân hàng số Cake by VPbank</a>
                                <ul>
                                    <li className="dropdown 42955">
                                        <a href="https://be.com.vn/khach-hang-ca-nhan/ngan-hang-so-cake-by-vpbank/huong-dan-dang-ky-bebike-2/" title="Hướng dẫn mở tài khoản ngân hàng số Cake By VPBank">Hướng dẫn mở tài khoản ngân hàng số Cake By VPBank</a>
                                    </li>
                                    <li className="dropdown 42978">
                                        <a href="https://be.com.vn/tin-tuc/uu-dai-cua-cake-danh-cho-khach-hang-be/" title="Ưu đãi của Cake dành cho khách hàng Be">Ưu đãi của Cake dành cho khách hàng Be</a>
                                    </li>
                                    <li className="dropdown 42966">
                                        <a href="https://cake.vn/" title="Tìm hiểu thêm về Cake">Tìm hiểu thêm về Cake</a>
                                    </li>
                                </ul>
                                <a className="111" href="https://be.com.vn/tin-tuc/di-chuyen-san-bay-thuan-tien-voi-be-san-bay/" title="Di chuyển sân bay thuận tiện với beAirport">Di chuyển sân bay thuận tiện với beAirport</a>
                            </div>
                        </li>
                        <li className="dropdown 110 menu-corpo">
                            <a className="item-d" href="https://be.com.vn/khach-hang-doanh-nghiep/" title="Khách hàng doanh nghiệp">Khách hàng doanh nghiệp</a>
                            <div aria-labelledby="dropdownMenu3" className="dropdown-menu animated slideInUp">
                                <a className="110" href="https://be.com.vn/khach-hang-doanh-nghiep/becorporate/" title="beCorporate">beCorporate</a>
                                <a className="110" href="https://be.com.vn/khach-hang-doanh-nghiep/beads/" title="beAds">beAds</a>
                            </div>
                        </li>
                        <li className="dropdown 109 ">
                            <a className="item-d" href="https://be.com.vn/tai-xe/" title="Tài xế">Tài xế</a>
                            <div aria-labelledby="dropdownMenu4" className="dropdown-menu animated slideInUp">
                                <a className="109" href="https://dangkybedriver.be.com.vn/phieu-dang-ky-tai-xe-be" title="Đăng ký tài xế Be online">Đăng ký tài xế Be online</a>
                                <a className="109" href="https://be.com.vn/tai-xe/huong-dan-dang-ky-bebike/" title="Hướng dẫn đăng ký beBike">Hướng dẫn đăng ký beBike</a>
                                <a className="109" href="https://be.com.vn/tai-xe/huong-dan-dang-ky-becar/" title="Hướng dẫn đăng ký beCar">Hướng dẫn đăng ký beCar</a>
                                <a className="109" href="https://be.com.vn/be-rider-blog/huong-dan-ky-hop-dong/" title="Hướng dẫn ký hợp đồng">Hướng dẫn ký hợp đồng</a>
                                <a className="109" href="https://be.com.vn/chuong-trinh-thuong/hcm/" title="Chương trình thưởng">Chương trình thưởng</a>
                                <a className="109" href="https://be.com.vn/be-rider-blog/tai-ung-dung-tai-xe/" title="Tải ứng dụng tài xế">Tải ứng dụng tài xế</a>
                                <a className="109" href="https://be.com.vn/be-rider-blog/bebike-becar-huong-dan-nap-tien-vao-tai-khoan-tai-xe-tu-ngan-hang-so-cake-by-vpbank/" title="Hướng dẫn nạp tiền từ Ngân hàng số Cake by VPBank">Hướng dẫn nạp tiền từ Ngân hàng số Cake by VPBank</a>
                                <a className="109" href="https://be.com.vn/be-rider-blog/huong-dan-rut-tien-qua-cake/" title="Hướng dẫn rút tiền qua ngân hàng Cake by VPBank">Hướng dẫn rút tiền qua ngân hàng Cake by VPBank</a>
                                <a className="109" href="https://cake.vn/" title="Tìm hiểu thêm về Cake">Tìm hiểu thêm về Cake</a>
                            </div>
                        </li>
                        <li className="dropdown 112 ">
                            <a className="item-d" href="https://be.com.vn/ho-tro/" title="Hỗ trợ">Hỗ trợ</a>
                            <div aria-labelledby="dropdownMenu5" className="dropdown-menu animated slideInUp">
                                <a className="112" href="https://be.com.vn/ho-tro/cau-hoi-thuong-gap/" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a>
                                <a className="112" href="https://be.com.vn/ho-tro/privacy-policy/" title="Chính sách bảo mật">Chính sách bảo mật</a>
                            </div>
                        </li>
                        <li className="dropdown 52684 ">
                            <a className="item-d" href="" title="Đối tác nhà hàng">Đối tác nhà hàng</a>
                            <div aria-labelledby="dropdownMenu6" className="dropdown-menu animated slideInUp">
                                <a className="52684" href="https://dangkynhahang.be.com.vn/" title="Đăng Ký Đối tác Nhà Hàng Online">Đăng Ký Đối tác Nhà Hàng Online</a>
                                <a className="52684" href="https://be.com.vn/doi-tac-nha-hang/bo-quy-tac-ung-xu-cua-doi-tac-nha-hang/" title="Bộ Quy Tắc Ứng Xử Của Đối Tác Nhà Hàng">Bộ Quy Tắc Ứng Xử Của Đối Tác Nhà Hàng</a>
                                <a className="52684" href="https://be.com.vn/doi-tac-nha-hang/huong-dan-su-dung-ung-dung-nha-hang-bemerchant/" title="Hướng dẫn sử dụng Ứng dụng nhà hàng">Hướng dẫn sử dụng Ứng dụng nhà hàng</a>
                                <a className="52684" href="https://be.com.vn/huong-dan-dang-ky-chuong-trinh-khuyen-mai-dong-tai-tro-cung-befood/" title="Hướng dẫn đăng ký chương trình khuyến mại đồng tài trợ cùng beFood">Hướng dẫn đăng ký chương trình khuyến mại đồng tài trợ cùng beFood</a>
                                <a className="52684" href="https://be.com.vn/doi-tac-nha-hang/dieu-khoan-hop-tac/" title="Điều khoản hợp tác">Điều khoản hợp tác</a>
                            </div>
                        </li>
                        <li className="wrapper-btn">
                            <a className="btn-download btn-yellow" href="/#download-app">Tải ứng dụng ngay </a>
                        </li>
                    </ul>
                </nav>

                <ul className="nav-right" id="menu-menu-principal">
                    <li className="active"><a href="#" onClick={() => false}>VN</a></li>
                    <li><a href="https://be.com.vn/en/consumer/be-transport/">EN</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
