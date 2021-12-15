import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, MonitorOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { MenuItem } from 'rc-menu';

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const handleResize = () => setScreenSize(window.innerWidth);


    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize");
    }, []);

    useEffect(()=>{
        screenSize < 768 ? setActiveMenu(false): setActiveMenu(true);
    }, [screenSize]);

    return (
         <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item key="home" icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="cryptocurrencies" icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item key="exchanges" icon={<MonitorOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item key="news" icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
            
        </div>
    )
}

export default Navbar;
