import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#198B4D',
                colorBgContainer:''
            }
        }}
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>,
)
