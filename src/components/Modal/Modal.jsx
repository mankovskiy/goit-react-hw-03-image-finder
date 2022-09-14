import overlay from './Modal.module.css';
import modal from './Modal.module.css';

export function Modal({ modalImage, toggleModal, altTags }) {
  return (
    <div className={overlay.overlay} onClick={() => toggleModal()}>
      <div className={modal.modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
}
