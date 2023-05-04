import React, { useEffect } from 'react';

const GoogleLogin = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = initGoogleButton;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initGoogleButton = () => {
        window.google.accounts.id.initialize({
            client_id: '741181191266-napuq2i7l1tj86aot4qiqcld5c3crd5m.apps.googleusercontent.com/',
            callback: handleCredentialResponse,
            auto_select: false,
        });
        window.google.accounts.id.renderButton(document.getElementById('google-login-button'), {
            theme: 'outline',
            size: 'large',
        });
    };

    const handleCredentialResponse = (response) => {
        console.log(response);
    };

    return <div id="google-login-button"></div>;
};

export default GoogleLogin;