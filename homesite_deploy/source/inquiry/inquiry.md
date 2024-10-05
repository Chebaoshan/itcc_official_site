### 問い合わせ

---

ご連絡いただきました個人情報につきましては、弊社「個人情報保護方針」に基づいて厳重に管理するとともに、お問い合わせ対応 以外に使用することはございません。

以下のフォームに必要事項をご記入の上、送信してください。

<style>
.inquiry-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #e6f2ff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.Form-Item {
    margin-bottom: 20px;
}
.Form-Item-Label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #003366;
}
.Form-Item-Label-Required {
    color: #ff4d4d;
    margin-right: 5px;
}
.Form-Item-Input,
.Form-Item-Textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #4d94ff;
    border-radius: 4px;
    background-color: #ffffff;
}
.Form-Item-Textarea {
    height: 150px;
}
.Form-Btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.Form-Btn:hover {
    background-color: #004d99;
}
</style>
<script>
  function sendInquiry() {
  alert("sendInquiry");
  let name = document.getElementsByName("name")[0].value;
  let phone = document.getElementsByName("phone")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let message = document.getElementsByName("message")[0].value;
  let nodemailer = require("nodemailer");

  // 创建一个SMTP传输器
  let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 587, // 通常SMTP使用587端口
    secure: false, // 使用TLS
    auth: {
      user: "ogm.guzhichao@gmail.com",
      pass: "A0A09BBA8B5530F34946F765DCFE810B1294",
    },
  });

  // 定义邮件选项
  let mailOptions = {
    from: "ogm.guzhichao@gmail.com",
    to: "chebaoshan2024@qq.com",
    subject: `${today}_网站咨询来稿`,
    html: `<b>尊敬的王社长，您好</b> 
           <br/>我是${name}
           <br/>我的电话号码是:${phone}
           <br/>我的邮箱是:${email}
           <br/>我想咨询的内容是:${message}`,
  };
  console.log(mailOptions);
  // 发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("发送失败:", error);
      alert("お問い合わせの送信に失敗しました。");
    } else {
      console.log("邮件已发送:", info.response);
      alert("お問い合わせを送信しました。");
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.Form-Btn').addEventListener('click', sendInquiry);
});
</script>
<form class="inquiry-form" onsubmit="return false">
    <div class="Form">
        <div class="Form-Item">
            <label class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お名前</label>
            <input type="text" name="name" class="Form-Item-Input" placeholder="例）ITCC太郎" required>
        </div>
        <div class="Form-Item">
            <label class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</label>
            <input type="tel" name="phone" class="Form-Item-Input" placeholder="例）000-0000-0000" required>
        </div>
        <div class="Form-Item">
            <label class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</label>
            <input type="email" name="email" class="Form-Item-Input" placeholder="例）example@gmail.com" required>
        </div>
        <div class="Form-Item">
            <label class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</label>
            <textarea name="message" class="Form-Item-Textarea" required></textarea>
        </div>
        <div class="Form-Item">
            <input type="checkbox" name="privacy" id="privacy" required>
            <label for="privacy"><a href="/privacy/privacy">個人情報の取り扱いに同意する</a></label>
        </div>
        <input type="submit" class="Form-Btn" value="送信する">
    </div>
</form>
