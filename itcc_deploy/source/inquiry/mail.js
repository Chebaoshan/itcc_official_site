import nodemailer from "nodemailer";
export default function sendInquiry(name, phone, email, message) {
  // 创建一个SMTP传输器
  let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ogm.guzhichao@gmail.com",
      pass: "fe623676-b974-439b-9990-51f5e847bb98",
    },
  });

  // 定义邮件选项
  let mailOptions = {
    from: "ogm.guzhichao@gmail.com", // 替换为您的ElasticEmail账户邮箱
    to: "chebaoshan1995@outlook.com", // 替换为接收者的邮箱
    subject: `网站咨询来稿`,
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
