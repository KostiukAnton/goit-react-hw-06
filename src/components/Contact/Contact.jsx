import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ date: { id, name, number } }) {
  const dispatch = useDispatch();
  const hadleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.contactcontainer}>
        <p className={css.name}>
          <IoPerson /> {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={hadleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
