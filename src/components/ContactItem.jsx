import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPersonHalfDress } from "react-icons/fa6";
import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li className={styles.item} key={id}>
      <p>
        <span>
          <FaPersonHalfDress />
        </span>
        {name} {lastName}
      </p>
      <p>
        <span>
          <MdEmail /> {email}
        </span>
      </p>
      <p>
        <span>
          <FaPhoneVolume /> {phone}
        </span>
      </p>
      <button onClick={() => deleteHandler(id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default ContactItem;
