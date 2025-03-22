import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import { FormInput, InputPassword } from "../../components/FormInput";
import Kategori from "../../components/Kategori";
import Navigation from "../../components/NavigationBar";  

const Login = () => {
    return(
        <>
            <Navigation/>
            <AuthForm>
                <AuthHeader
                    title="Masuk ke Akun"
                    subtitle="Yuk, lanjutin belajarmu di videobelajar."
                />

                <AuthFormContentWrapper
                    inputs={[
                        <FormInput id="login-email-input" label="E-Mail" name="email" required type="text"  />,
                        <InputPassword id="password-input" label="Password" name="password" required type="password"  />

                    ]}
                    buttons={[
                        <Button />,
                        <Button text="Daftar" />,
                        <GoogleLogin/>  
                    ]}
                />

            </AuthForm>
            
            
        </>
    )
}

export default Login;