import { Contact } from "@/types/Contact";

const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow">
      <h1>{contact.title}</h1>
      <h1>{contact.phone}</h1>
    </div>
  );
};
export default ContactCard;
