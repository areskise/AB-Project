import './header.css';
import img from '../../images/Image';
import { useEffect, useState } from 'react';
import { useNavigate, NavLink, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [navUser, setNavUser] = useState(false);
    const [selectComany, setSelectCompany] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setSelectCompany('Công ty 1')
    }, []);
    useEffect(() => {
        
    }, [selectComany]);
    console.log(selectComany);
    const handleLogout = () => {
        navigate('/');
    }

    return (
        <header className="bg-light">
            <div className=" mx-lg-4 mx-md-3 mw-100">
                <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between" style={{height: '65px'}}>
                    <div className='d-flex p-2'>
                        <a href="/trang-chu" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src={img.logoBlack} alt='logo' width="32" height="32" className='logo-img'/>
                        </a>
                    <div className='d-flex'>
                        <select className='select-company' onChange={(e) => setSelectCompany(e.target.value)}>
                            <option>Công ty 1</option>
                            <option>Công ty 2</option>
                            <option>Công ty 3</option>
                        </select>
                    </div>
                    </div>


                    <div className="d-flex dropdown text-end">
                        <i class="fa-regular fa-bell notify-icon"></i>
                        <a href="#" className="avatar link-dark text-decoration-none p-1 border rounded" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={img.avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
                            <span className='p-1'>Nguyễn Văn A</span>
                            <i className={"fa-solid fa-chevron-down p-1"}></i>
                        </a>
                        <ul className="p-1 dropdown-menu text-small">
                            <li>
                            <button className='btn dropdown-item' onClick={() => setShowModal(true)}>
                                Đăng xuất
                            </button>
                            </li>
                        </ul>
                        <a href="#" className="menu-avatar link-dark text-decoration-none p-1" onClick={() => setShowMenu(true)}>
                            <i className={"menu-icon fa-solid fa-bars p-1"}></i>
                        </a>
                    </div>

                    <Modal dialogClassName="modal-menu" show={showMenu} onHide={() => setShowMenu(false)}>
                        <Modal.Body>
                        <div className="h-100 d-flex flex-column flex-shrink-0 p-3 bg-light sibar-menu">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <img src={img.avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
                                    <span className='p-1'>Nguyễn Văn A</span>
                                </div>
                                <a href="#" className="link-dark text-decoration-none p-1" onClick={() => setShowMenu(false)}>
                                    <i class="close-icon fa-solid fa-xmark"></i>
                                </a>
                            </div>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li
                                    className='nav-item'
                                >
                                    <NavLink 
                                    to={"/trang-chu"} 
                                    className="nav-link link-color"
                                    activeClassName="active"        
                                    >
                                    Trang chủ
                                    </NavLink>
                                </li>
                                <li
                                    className='nav-item'
                                >
                                    <NavLink 
                                    to={"/quan-ly-cong-ty"} 
                                    className="nav-link link-color"
                                    activeClassName="active"
                                    >
                                    Quản lý công ty
                                    </NavLink>
                                </li>
                                <li
                                    className='nav-item'
                                >
                                    <NavLink 
                                    to={"/quan-ly-phan-quyen"} 
                                    className="nav-link link-color"
                                    activeClassName="active"
                                    >
                                    Quảng lý phân quyền
                                    </NavLink>
                                </li>
                                <li
                                    className="nav-item nav-user"
                                    onClick={()=>setNavUser(!navUser)}
                                >
                                    <NavLink 
                                    to={"/quan-ly-nguoi-dung"} 
                                    className="d-flex nav-link link-color justify-content-between align-items-center disabled"
                                    >
                                    Quản lý người dùng
                                    <i className="fa-solid fa-chevron-down"></i>
                                    </NavLink>
                                </li>
                                    {navUser &&
                                    <ul>
                                    <li 
                                        className='nav-sub-item'
                                    >
                                        <NavLink 
                                        to={"/quan-ly-nguoi-dung/nhan-vien"} 
                                        className="nav-link link-color"
                                        activeClassName="subActive"
                                        >
                                        Nhân viên
                                        </NavLink>
                                    </li>
                                    <li 
                                        className='nav-sub-item'
                                    >
                                        <NavLink 
                                        to={"/quan-ly-nguoi-dung/khach-hang"} 
                                        className="nav-link link-color"
                                        activeClassName="subActive"
                                        >
                                        Khách hàng
                                        </NavLink>
                                    </li>
                                    </ul>
                                    }
                                <li
                                    className='nav-item'
                                >
                                    <NavLink 
                                    to={"/quan-ly-hui"} 
                                    className="nav-link link-color"
                                    activeClassName="active"
                                    >
                                    Quản lý hụi
                                    </NavLink>
                                </li>
                                <li
                                    className='nav-item'
                                >
                                    <NavLink 
                                    to={"/bao-cao"} 
                                    className="nav-link link-color"
                                    activeClassName="active"
                                    >
                                    Báo cáo
                                    </NavLink>
                                </li>
                                <li
                                    className='nav-item'
                                    onClick={() => {
                                        setShowModal(true)
                                        setShowMenu(false)
                                    }}
                                >
                                    <Link 
                                    to={"#"} 
                                    className="nav-link link-color"
                                    >
                                    Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </Modal.Body>
                    </Modal>

                    <Modal dialogClassName="modal-logout" show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header className='justify-content-center'>
                            <Modal.Title className='title'>CẢNH BÁO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='w-100 m-auto text-center'>
                            <div>Bạn đang thao tác đăng xuất.</div>
                            <div>Bạn có muốn tiếp tục?</div>
                        </Modal.Body>
                        <Modal.Footer className='justify-content-center'>
                            <button className='mx-3 btn btn-cancle' onClick={() => setShowModal(false)}>
                                Hủy
                            </button>
                            <button className='mx-3 btn btn-continue' onClick={handleLogout}>
                                Tiếp tục
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </header>
    )
}

export default Header;