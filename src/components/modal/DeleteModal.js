import ReactModal from 'react-modal';
import {Button} from "react-bootstrap";

const DeleteModal = ({isOpen, onSubmit, onCancel}) => {

    const handleClickSubmit = () => {
        onSubmit();
    };

    const handleClickCancel = () => {
        onCancel();
    };

    return (
        <ReactModal isOpen={isOpen}>
            <div>해당 게시물을 삭제하시겠습니까?</div>
            <div>
                <Button onClick={handleClickSubmit}>확인</Button>
                <Button onClick={handleClickCancel}>취소</Button>
            </div>
        </ReactModal>
    );
};

export default DeleteModal;