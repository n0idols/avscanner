import ContactCard from "@/components/ui/ContactCard";
import PageHero from "@/components/ui/PageHero";
import { getContacts } from "@/sanity/sanity-utils";

const ContactPage = async () => {
  const contacts = await getContacts();
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We are not law enforcement, if you have an emergency, call 911 or use the contacts below"
      />
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ContactPage;
