const mysql = require('mysql');

const con = mysql.createConnection({
  host: "walkway-database.cluster-c8snh8eettaw.ap-northeast-2.rds.amazonaws.com",
  user: "user_walkway",
  password: "dkagh1..",
  database: "walkwaydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT walkway_name, walkway_range, walkway_image, duration, walkway_review FROM walkway", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
