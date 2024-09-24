import styles from 'styles/auth.module.scss';
import { Divider, Form, Button, Input, Checkbox } from "antd";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { FormProps } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
const LoginPage = () => {


    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated);
    


    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className={styles['login-page']}>
            {/* Main bỏ vào không css */}
            <main className={styles.main}>  
                <div className={styles.container}>
                    <section className={styles.wrapper}>
                        <div className={styles.heading} >
                            <h2 className={`${styles.text} ${styles["text-large"]}`}>Đăng nhập</h2>
                            <Divider />
                        </div>

                        <Form
                            name="basic"
                            // style={{ maxWidth: 600 }}
                            // initialValues={{ remember: true }} //remember tự check
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Email"
                                name="username"
                                rules={[{ required: true, message: 'Email không được để trống!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                labelCol={{ span: 24 }}
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <p className={styles['text-normal']}>Bạn chưa có tài khoản ư,
                                <span>
                                    {/* <Link to='/register'> đăng ký</Link> */}
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default LoginPage;
