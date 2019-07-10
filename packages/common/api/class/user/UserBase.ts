// import api from "@/api"
export default class UserBase {
    // public id: string;
    // public name: string;
    constructor() {
    }
    // 生成随机数
    public createdNumber() {
        return Number(Math.random().toString().substr(3,11) + Date.now()).toString(36)
    }
    // 发送信息
    public sendMessage() {

    }
}
