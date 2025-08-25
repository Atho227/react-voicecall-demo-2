import { AppWindow, DeviceMobile, Headset, PhoneForward } from "../icon/NewStyleIcon"

const CallServices = [
    { id: 1, },
]

export const deviceTypes = [
    { type: 1, icon: Headset, title: 'Nghe gọi qua trình duyệt', description: 'Dùng tai nghe', },
    { type: 2, icon: AppWindow, title: 'Nghe gọi qua IP Phone / Softphone', description: 'Cần đăng nhập', },
    { type: 3, icon: PhoneForward, title: 'Chuyển cuộc gọi tới số 0946572813', description: null, },
    { type: 4, icon: AppWindow, title: 'Nghe gọi qua IP Phone / Softphone', description: 'Không cần đăng nhập', },
    { type: 8, icon: DeviceMobile, title: 'Nghe gọi qua ứng dụng di động CareSoft', description: null, },
]