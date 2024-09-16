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

<form class="inquiry-form">
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
        <input type="submit" class="Form-Btn" value="送信する" onSubmit="sendInquiry()">
    </div>
</form>
<script src="./inquiry.js"></script>
