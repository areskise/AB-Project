import "./addCompany.css";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const AddCompany = ({setShowAdd, showAdd}) => {
    const [subMenu, setSubMenu] = useState(false);

    return (
        <Modal dialogClassName="modal-add" show={showAdd} onHide={() => setShowAdd(false)}>
            <Modal.Header className='justify-content-center'>
                <Modal.Title className='title'>THÊM CÔNG TY</Modal.Title>
            </Modal.Header>
            <Modal.Body className='w-100 m-auto text-center'>
                <form className='form-container'>
                    <div>
                        <h5 className='title'>THÔNG TIN CÔNG TY</h5>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-end'>
                                <div className='label'>
                                    <label htmlFor="">Tên công ty</label>
                                </div>
                                <input type="text" className='form-control' placeholder='Nhập tên công ty'/>
                            </div>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-end'>
                                <div className='label'>
                                    <label htmlFor="">Mã TC</label>
                                </div>
                                <input type="text" className='form-control' disabled />
                            </div>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-end'>
                                <div className='label'>
                                    <label htmlFor="">Số điện thoại</label>
                                </div>
                                <input type="number" className='form-control' placeholder='Nhập SĐT' />
                            </div>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-end'>
                                <div className='label'>
                                    <label htmlFor="">Số vốn</label>
                                </div>
                                <input type="number" className='form-control form-money' placeholder='Nhập số vốn'/>
                                <span className='money'>VND</span>
                            </div>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-end'>
                                <div className='label'>
                                    <label htmlFor="">Ngày hoạt động</label>
                                </div>
                                <input type="date" className='form-control' value={format(new Date(), 'yyyy-MM-dd')} />
                            </div>
                    </div>
                    <div>
                        <h5 className='title'>THÊM CHỨC NĂNG</h5>
                        <div className='form-check'>
                            <div className='d-flex m-md-3 my-3 align-items-center justify-content-start'>
                                <input type="text" className='form-control' placeholder='Nhập từ khóa tìm kiếm' />
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Tất cả</label>
                                </div>
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Trang chủ</label>
                                </div>
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Quản lý công ty</label>
                                </div>
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div onClick={()=>setSubMenu(!subMenu)}>
                                    <label htmlFor="">
                                        Quản lý người dùng
                                        <i className="mx-3 fa-solid fa-chevron-down"></i>
                                    </label>
                                </div>
                            </div>
                            {subMenu &&
                                <ul>
                                    <li className='nav-sub-item p-2'>
                                        <div className='d-flex mx-4 align-items-center justify-content-start'>
                                            <input type="checkbox" className='form-checkbox' />
                                            <div>
                                                <label htmlFor="">Nhân viên</label>
                                            </div>
                                        </div>
                                        <ul className='mt-2'>
                                            <li className='nav-sub-item p-2'>
                                                <div className='d-flex mx-4 align-items-center justify-content-start'>
                                                    <input type="checkbox" className='form-checkbox' />
                                                    <div>
                                                        <label htmlFor="">Thêm</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='nav-sub-item p-2'>
                                                <div className='d-flex mx-4 align-items-center justify-content-start'>
                                                    <input type="checkbox" className='form-checkbox' />
                                                    <div>
                                                        <label htmlFor="">Cập nhập</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='nav-sub-item px-2'>
                                        <div className='d-flex mx-4 align-items-center justify-content-start'>
                                            <input type="checkbox" className='form-checkbox' />
                                            <div>
                                                <label htmlFor="">Khách hàng</label>
                                            </div>
                                        </div>
                                        <ul className='mt-2'>
                                            <li className='nav-sub-item p-2'>
                                                <div className='d-flex mx-4 align-items-center justify-content-start'>
                                                    <input type="checkbox" className='form-checkbox' />
                                                    <div>
                                                        <label htmlFor="">Thêm</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='nav-sub-item p-2'>
                                                <div className='d-flex mx-4 align-items-center justify-content-start'>
                                                    <input type="checkbox" className='form-checkbox' />
                                                    <div>
                                                        <label htmlFor="">Cập nhật</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            }
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Quản lý hụi</label>
                                </div>
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Báo cáo</label>
                                </div>
                            </div>
                            <div className='d-flex m-2 mx-4 align-items-center justify-content-start'>
                                <input type="checkbox" className='form-checkbox' />
                                <div>
                                    <label htmlFor="">Ngày hoạt động</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <button className='mx-3 btn btn-cancle' onClick={() => setShowAdd(false)}>
                    Đóng
                </button>
                <button className='mx-3 btn btn-continue'>
                    Thêm mới
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCompany;