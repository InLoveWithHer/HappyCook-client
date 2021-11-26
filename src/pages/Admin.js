import React, {useState} from 'react';
import CreateType from "../components/modals/CreateType";
import CreateUnderType from "../components/modals/CreateUnderType";
import DeleteType from "../components/modals/DeleteType";
import DeleteUnderType from "../components/modals/DeleteUnderType";
import DeleteUser from "../components/modals/DeleteUser";

const Admin = () => {
    const [createTypeVisible, setCreateTypeVisible] = useState(false)
    const [createUnderTypeVisible, setCreateUnderTypeVisible] = useState(false)
    const [DeleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [DeleteUnderTypeVisible, setDeleteUnderTypeVisible] = useState(false)
    const [DeleteUserVisible, setDeleteUserVisible] = useState(false)
    return (
        <div>
            <div className="adminButtons">
                <a className="authButton2" onClick={() => setCreateTypeVisible(true)}>Добавить тип</a>
                <a className="authButton2" onClick={() => setCreateUnderTypeVisible(true)}>Добавить подтип</a>
                <a className="authButton2" onClick={() => setDeleteTypeVisible(true)}>Удалить тип</a>
                <a className="authButton2" onClick={() => setDeleteUnderTypeVisible(true)}>Удалить подтип</a>
                <a className="authButton2" onClick={() => setDeleteUserVisible(true)}>Удалить пользователя</a>
            </div>
            <CreateType show={createTypeVisible} onHide={() => setCreateTypeVisible(false)}/>
            <CreateUnderType show={createUnderTypeVisible} onHide={() => setCreateUnderTypeVisible(false)}/>
            <DeleteType show={DeleteTypeVisible} onHide={() => setDeleteTypeVisible(false)}/>
            <DeleteUnderType show={DeleteUnderTypeVisible} onHide={() => setDeleteUnderTypeVisible(false)}/>
            <DeleteUser show={DeleteUserVisible} onHide={() => setDeleteUserVisible(false)}/>
        </div>
    );
};

export default Admin;