document.addEventListener("DOMContentLoaded", function () {
    const FormDangKy = document.getElementById("FormDangKy");
    const TenDangNhapInput = document.getElementById("TenDangNhap");
    const EmailDangKyInput = document.getElementById("EmailDangKy");
    const MatKhauDangKyInput = document.getElementById("MatKhauDangKy");
    const XacNhanMatKhauInput = document.getElementById("XacNhanMatKhau");
    
    const TenDangNhapLoi = document.getElementById("TenDangNhapLoi");
    const EmailLoi = document.getElementById("EmailLoi");
    const MatKhauLoi = document.getElementById("MatKhauLoi");
    const XacNhanMatKhauLoi = document.getElementById("XacNhanMatKhauLoi");

    function hienThiLoi(PhanTuLoi, ThongDiep) {
        PhanTuLoi.textContent = ThongDiep;
        PhanTuLoi.classList.remove("an");
    }

    function XoaLoi(PhanTuLoi) {
        PhanTuLoi.textContent = "";
        PhanTuLoi.classList.add("an");
    }

    function XoaTatCaLoiForm() {
        XoaLoi(TenDangNhapLoi);
        XoaLoi(EmailLoi);
        XoaLoi(MatKhauLoi);
        XoaLoi(XacNhanMatKhauLoi);
    }

    if (FormDangKy) {
        FormDangKy.addEventListener("submit", function (suKien) {
            suKien.preventDefault();
            XoaTatCaLoiForm(); 
            const TenDangNhap = TenDangNhapInput.value.trim();
            const EmailDangKy = EmailDangKyInput.value.trim();
            const MatKhauDangKy = MatKhauDangKyInput.value.trim();
            const XacNhanMatKhau = XacNhanMatKhauInput.value.trim();
            let hopLe = true;

            if (TenDangNhap === "") {
                hienThiLoi(TenDangNhapLoi, "Tên đăng nhập không được để trống.");
                hopLe = false;
            } else if (TenDangNhap.length < 5) {
                hienThiLoi(TenDangNhapLoi, "Tên đăng nhập phải có ít nhất 5 ký tự.");
                hopLe = false;
            } else if (/\s/.test(TenDangNhap)) {
                hienThiLoi(TenDangNhapLoi, "Tên đăng nhập không được chứa khoảng trắng.");
                hopLe = false;
            }

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (EmailDangKy === "") {
                hienThiLoi(EmailLoi, "Email không được để trống.");
                hopLe = false;
            } else if (!regexEmail.test(EmailDangKy)) {
                hienThiLoi(EmailLoi, "Vui lòng nhập địa chỉ Email hợp lệ.");
                hopLe = false;
            }

            const regexMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
            if (MatKhauDangKy === "") {
                hienThiLoi(MatKhauLoi, "Mật khẩu không được để trống.");
                hopLe = false;
            } else if (MatKhauDangKy.length < 8) {
                hienThiLoi(MatKhauLoi, "Mật khẩu phải có ít nhất 8 ký tự.");
                hopLe = false;
            } else if (!regexMatKhau.test(MatKhauDangKy)) {
                hienThiLoi(MatKhauLoi, "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt.");
                hopLe = false;
            }

            if (XacNhanMatKhau === "") {
                hienThiLoi(XacNhanMatKhauLoi, "Xác nhận mật khẩu không được để trống.");
                hopLe = false;
            } else if (MatKhauDangKy !== XacNhanMatKhau) {
                hienThiLoi(XacNhanMatKhauLoi, "Mật khẩu xác nhận không khớp.");
                hopLe = false;
            }

            if (hopLe) {
                alert("Đăng ký thành công, hãy quay lại để đăng nhập !");
                FormDangKy.reset(); 
                window.location.href = "trangdangnhap.html";
            } else {
                alert("Lỗi nhập dữ liệu! Vui lòng kiểm tra lại thông tin đăng ký.");
            }
        });
    }

    
    TenDangNhapInput.addEventListener("input", () => XoaLoi(TenDangNhapLoi));
    EmailDangKyInput.addEventListener("input", () => XoaLoi(EmailLoi));
    MatKhauDangKyInput.addEventListener("input", () => XoaLoi(MatKhauLoi));
    XacNhanMatKhauInput.addEventListener("input", () => XoaLoi(XacNhanMatKhauLoi));
});
