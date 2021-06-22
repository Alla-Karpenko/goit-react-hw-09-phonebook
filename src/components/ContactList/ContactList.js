import './ContactList.scss';
import { connect } from 'react-redux';
import { contactOperations, contactsSelectors } from "../../redux/contact";

const ContactItem = ({ id, name, number , onRemove }) => {
    return (
        <li className="Contact-List" key={id}> 
            {name}: {number} <button className="Button-List" type="submit" onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
}

const ContactList = ({ contacts, onRemoveContact }) => {
    return (
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onRemove={onRemoveContact}
          />
        ))}
      </ul>
    );
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getvisibleContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
