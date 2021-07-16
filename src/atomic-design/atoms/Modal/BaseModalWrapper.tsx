// import React from "react";
// import Modal from "./Modal";
// import { DesktopModalContainer, Header } from "./ModalPopup.styles";

// interface BaseModalWrapper {
//   isModalVisible: boolean;
//   onBackdropClick: () => void;
// }

// const BaseModalWrapper: React.FC<BaseModalWrapper> = ({
//   onBackdropClick,
//   isModalVisible,
// }) => {
//   if (!isModalVisible) {
//     return null;
//   }

//   return (
//     <Modal>
//       <DesktopModalContainer>
//         <Header>Doubloon information</Header>
//       </DesktopModalContainer>
//     </Modal>
//   );
// };

// export default BaseModalWrapper;

import React from "react";

export default function BaseModalWrapper() {
  return <div></div>;
}
