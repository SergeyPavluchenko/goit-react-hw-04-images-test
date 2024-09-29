import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImgStyle, ModalWindow, Overlay } from './ModalStyled';

const ModaRoot = document.querySelector('#modal-root');

export function Modal(props) {

  const closeMOdal = () => {
    props.onClose();
  };

  const hendleClick = e => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return createPortal(
    <Overlay onClick={hendleClick}>
      <ModalWindow>
        <ImgStyle src={props.largeImageURL} alt={props.tags} />
        <AiOutlineCloseCircle
          color="white"
          cursor="pointer"
          onClick={closeMOdal}
        />
      </ModalWindow>
    </Overlay>,
    ModaRoot
  );
}

// export class Modal extends Component {

//   closeMOdal = () => {
//     this.props.onClose();
//   };

//   hendleClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.hendleClick}>
//         <ModalWindow>
//           <ImgStyle src={this.props.largeImageURL} alt={this.props.tags} />
//           <AiOutlineCloseCircle
//             color="white"
//             cursor="pointer"
//             onClick={this.closeMOdal}
//           />
//         </ModalWindow>
//       </Overlay>,
//       ModaRoot
//     );
//   }
// }
