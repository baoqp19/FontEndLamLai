import type { TabsProps } from "antd";

interface IProps {
    open: boolean;  // show and hide nên true, false
    onClose: (v: boolean) => void // bỏ vào các hàm nên void
}

const UserResume = (props: any) => {
    
    return(
        <div>
            hdh
        </div>
    )
}

const ManageAccount = (props: IProps) => {

    const { open, onClose } = props;
    
    const items: TabsProps['items'] = [
        {
            key: 'user-resume',
            label: `Rải CV`,
            children: <UserResume />,
        },

        {
            key: 'user-update-info',
            label: `Cập nhật thông tin`,
            children: "//todo",
        },
        {
            key: 'user-password',
            label: `Thay đổi mật khẩu`,
            children: `//todo`,
        },
    ];



    return
    (
        <div>

        </div>
    )
}

export default ManageAccount