import ContactCard from "@/components/ui/ContactCard";
import { getContacts } from "@/sanity/sanity-utils";

const ContactPage = async () => {
  const contacts = await getContacts();
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact._id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
export default ContactPage;
