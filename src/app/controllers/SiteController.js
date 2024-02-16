class SiteController {
  // Phương thức index để xử lý yêu cầu và render trang "home"
  index(req, res) {
    // Thực hiện logic lấy tin tức (nếu cần)
    // Sau đó render trang "home" bằng res.render()
    res.render("home");
  }

  // get search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
