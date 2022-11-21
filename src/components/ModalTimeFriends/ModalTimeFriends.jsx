import './ModalTimeFriends.css';
import { ModalContent } from './ModalTimeFriends.styled';


const ModalTimeFriends = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      
      onClick={() => setActive(false)}
    >
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </div>
  );
};

export default ModalTimeFriends;