class NewsController {
  // Phương thức index để xử lý yêu cầu và render trang "news"
  index(req, res) {
    // Thực hiện logic lấy tin tức (nếu cần)
    // Sau đó render trang "news" bằng res.render()
    res.render("news");
  }

  // get new slug
  show(req, res) {
    res.send("news page slug");
  }
}

module.exports = new NewsController();
