import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ date: { id, name, number }, onDelete }) {
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
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
