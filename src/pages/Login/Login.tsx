import useAuth from "../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {formLoginDefault, formLoginSchema, ROUTES_PATH} from "../../constants";
import LeftLogo from '../../assets/imgs/left-logo.png';
import ImgLeftLogin from '../../assets/imgs/img-intro-login.png';
import LogoPKNText from '../../assets/imgs/logo-pkn-text.png';
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import {CloseEye, OpenEye} from "../../assets/svgs/SVGIcon.tsx";
import {Switch} from "antd";
import ButtonGradient from "../../components/ButtonGradient";

const Login = () => {
    const navigate = useNavigate();
    const {login, isAuthenticated} = useAuth();
    const [saveSessionLogin, setSaveSessionLogin] = useState(false);
    const {
        formState: {errors, isDirty, isValid},
        control: controlLogin,
    } = useForm({
        resolver: yupResolver(formLoginSchema()),
        mode: 'all',
        defaultValues: formLoginDefault
    })
    useEffect(() => {
        console.log('isAuthenticated 1', isAuthenticated);
        if (isAuthenticated) {
            navigate(ROUTES_PATH.DASHBOARD);
        }
    }, [isAuthenticated, navigate]);
    const handleLogin = async () => {
        const result = await login('hauphvnTokenTest');
        if (result) {
            navigate(ROUTES_PATH.DASHBOARD);
        }
    }
    const onSaveSessionLogin = () => {
        setSaveSessionLogin(!saveSessionLogin);
    }
    return (
        <div className={' px-[32px] py-[24px] h-screen flex flex-col'}>
            <div className={''}>
                <img src={LeftLogo} alt={'logo'}/>
            </div>
            <div className={'max-w-[1440px] min-w-full flex justify-center'}>
                <div className={'pr-[94px] flex gap-x-[95px] flex-row'}>
                    <div>
                        <img className={'max-w-[661px]'} src={ImgLeftLogin} alt={'img-pkg-login'}/>
                    </div>
                    <div
                        className={'min-w-[534px] px-[40px] py-[48px] border-[#DDDDE3] border rounded-[24px] shadow-custom-2'}>
                        <div className={'mb-[100px] flex justify-center items-center w-full'}>
                            <img src={LogoPKNText} alt={'pkn-login'}/>
                        </div>
                        <div className={'form-login-container'}>
                            <div className="title w-full text-center">
                                <h1 className={'text-[42px] font-[700] text-neutrals-900  '}>CHÀO MỪNG TRỞ LẠI</h1>
                                <h5 className={'text-semantics-grey02 text-[20px] font-[600]'}>Đăng nhập vào tài khoản
                                    của
                                    bạn</h5>
                            </div>
                            <div className="form px-[13px] pt-[48px]">
                                <Controller
                                    control={controlLogin}
                                    name='account'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'account'}
                                                   className={'label text-[12px] font-[500] text-[#454545] pb-[7px]'}>
                                                Tài khoản<span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.account?.message}
                                                        id={'account'}
                                                        className={'bg-neutrals-200 h-[50px]'}
                                                        placeholder={'Tài khoản của bạn'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.account?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                                <Controller
                                    control={controlLogin}
                                    name='password'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[88px]'}>
                                            <label htmlFor={'password'}
                                                   className={'label text-[12px] font-[500] text-[#454545] pb-[7px]'}>
                                                Tài khoản<span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <InputPassword
                                                        warning={!!errors.password?.message}
                                                        iconOpenEye={<OpenEye/>}
                                                        iconCloseEye={<CloseEye/>}
                                                        type={'password'}
                                                        id={'password'}
                                                        className={'bg-neutrals-200 h-[50px]'}
                                                        placeholder={'Mật khẩu của bạn'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.password?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                                <div className={'flex gap-x-[10px] items-center mb-[32px] mt-[18px]'}>
                                    <Switch defaultValue={saveSessionLogin} onChange={onSaveSessionLogin}/>
                                    <label htmlFor="sessionLogin">Lưu đăng nhập</label>
                                </div>

                                <ButtonGradient
                                   className={'h-[49px] w-[180px] text-[18px] px-[26px]'}
                                    onClick={handleLogin}
                                    disabled={!isDirty || !isValid}
                                    name={'Đăng nhập'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;