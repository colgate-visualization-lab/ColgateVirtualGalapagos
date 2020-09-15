import React from "react"
import Modal from 'react-modal'
import "./styles.css"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
  
};

function IntroVideo(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Intro</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Volcano Module - Intro"
        >
          <button onClick={closeModal}>Close</button>
          <div>I am a modal</div>
          <video width="1080" height="auto" src={props.src} preload="auto" controls/>
        </Modal>
      </div>
    );
}
 


export default IntroVideo