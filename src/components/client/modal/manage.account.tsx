import { callFetchResumeByUser } from "@/config/api";
import { IResume } from "@/types/backend";
import type { TabsProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { Modal, Table, Tabs } from 'antd'
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface IProps {
    open: boolean;  // show and hide nên true, false
    onClose: (v: boolean) => void;// bỏ vào các hàm nên void
}

const UserResume = (props: any) => {
    const [listCV, setListCV] = useState<IResume[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setIsFetching(true);
            const res = await callFetchResumeByUser();
            if (res && res.data) {
                setListCV(res.data.result as IResume[])
            }
            setIsFetching(false);
        }
        init();
    }, [])

    const columns: ColumnsType<IResume> = [
        {
            title: "STT",
            key: 'index',
            width: 50,
            align: "center",
            render: (index, record) => {
                return (
                    <>
                        {(index + 1)}
                    </>
                )
            }
        },

        {
            title: 'Công Ty',
            dataIndex: "companyName",

        },

        {
            title: 'Job title',
            dataIndex: ["job", "name"],

        },
        {
            title: 'Trạng thái',
            dataIndex: "status",
        },

        {
            title: 'Ngày rải CV',
            dataIndex: "createdAt",
            render(value, record, index) {
                return (
                    <>
                        {dayjs(record.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                    </>
                )
            }
        },

        {
            title: '',
            dataIndex: "",
            render(value, record, index) {
                return (
                    <a
                        href={`${import.meta.env.VITE_BACKEND_URL}/storage/resume/${record?.url}`}
                        target="_blank"
                    >Chi tiết</a>
                )
            },
        },
    ];
    return (
        <div>
            <Table
                columns={columns}    // có để liên kết với datasourse
                dataSource={listCV}
                loading={isFetching}
                pagination={false}
            />
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



    return (
        <>
            <Modal
                title="Quản lý tài khoản"
                open={open}
                onCancel={() => onClose(false)}
                maskClosable={false}  // nhấn ra ngoài thì khôg mất
                footer={null}
                destroyOnClose={true}
                width={isMobile ? "100%" : "1000px"}

            >
                
                <div style={{ minHeight: 400 }}>
                    <Tabs
                        defaultActiveKey="user-resume"  // active đầu tiền
                        items={items}
                    // onChange={onChange}
                    />
                </div>
            </Modal>
        </>
    )
}

export default ManageAccount