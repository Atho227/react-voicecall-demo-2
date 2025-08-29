import { AppWindow, DeviceMobile, Headset, PeopleExchange, PhoneForward } from "../icon/NewStyleIcon"

const CallServices = [
    { id: 1, },
]

export const deviceTypes = [
    { type: 1, icon: Headset, title: 'Nghe gọi qua trình duyệt', description: 'Dùng tai nghe', choosen: true },
    { type: 2, icon: AppWindow, title: 'Nghe gọi qua IP Phone / Softphone', description: 'Cần đăng nhập', choosen: false },
    { type: 3, icon: PhoneForward, title: 'Chuyển cuộc gọi tới số 0946572813', description: null, choosen: false },
    { type: 4, icon: AppWindow, title: 'Nghe gọi qua IP Phone / Softphone', description: 'Không cần đăng nhập', choosen: false },
    { type: 8, icon: DeviceMobile, title: 'Nghe gọi qua ứng dụng di động CareSoft', description: null, choosen: false },
]

export const transferType = [
    { id: 1, icon: PeopleExchange, title: 'Trao đổi nội bộ', description: 'Trao đổi với chuyên viên khác', choosen: false },
    { id: 2, icon: PeopleExchange, title: 'Qua nhánh ACD khác', description: 'Chuyển cuộc gọi qua nhánh acd khác', choosen: false },
]