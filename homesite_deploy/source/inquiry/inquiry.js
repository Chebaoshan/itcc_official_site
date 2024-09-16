function sendInquiry() {
  alert(1);
  var name = document.getElementsByName("name")[0].value;
  var phone = document.getElementsByName("phone")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var message = document.getElementsByName("message")[0].value;
  var subject = "お問い合わせ - " + name;
  var body =
    "名前: " +
    name +
    "\n" +
    "電話番号: " +
    phone +
    "\n" +
    "メールアドレス: " +
    email +
    "\n\n" +
    "お問い合わせ内容:\n" +
    message;

  var mailtoLink =
    "mailto:chebaoshan2024@outlook.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
}
