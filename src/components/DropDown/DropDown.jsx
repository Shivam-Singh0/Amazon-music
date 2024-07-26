import Dropdown from 'react-bootstrap/Dropdown';
import styles from './DropDown.module.css';

function DropDown({ icon, itmes }) {
  return (
    <Dropdown  >
      <Dropdown.Toggle id="dropdown-basic" variant='dark' className={`${styles.dropdown} rounded-circle p-2`}>
        {icon}
      </Dropdown.Toggle>

        
        <Dropdown.Menu className={styles.dropdown_menu_show}>
          {itmes?.map((item, index) => (
            <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      
     
    </Dropdown>
    
  );
}

export default DropDown;