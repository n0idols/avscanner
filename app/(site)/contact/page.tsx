import ContactCard from "@/components/ui/ContactCard";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import PageWrapper from "@/components/ui/PageWrapper";
import { getContacts } from "@/sanity/sanity-utils";

const ContactPage = async () => {
  const contacts = await getContacts();
  return (
    <PageWrapper>
      <PageHero
        title="Contact"
        subtitle="We are not law enforcement, if you have an emergency, call 911 or use the contacts below"
      />
      <PageContainer>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </div>
      </PageContainer>
    </PageWrapper>
  );
};
export default ContactPage;
