const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");
// config public
app.use(express.static(path.join(__dirname, "public")));
// http logger
// app.use(morgan("combined"));
//send form js html (middleware)
//cấu hình middleware để phân tích các dữ liệu được gửi từ mẫu form HTML trên trình duyệt.
app.use(
  express.urlencoded({
    extended: true,
  })
);
// sử dụng template views
app.use(express.json());
// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//router init
route(app);

app.listen(port, () =>
  console.log(`Express listening on port http://localhost:${port}`)
);
