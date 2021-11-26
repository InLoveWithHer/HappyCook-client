import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {deleteUser} from "../../http/userAPI";
import {HOME_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const DeleteUser = observer(({show, onHide}) => {
    const {user} = useContext(Context)
    console.log(user)
    const history = useHistory()
    const [value, setValue] = useState('')

    const delUser = () => {
        deleteUser({login: value}).then(data => null)
        onHide()
        // history.push(HOME_ROUTE)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите Логин"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={delUser}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteUser;