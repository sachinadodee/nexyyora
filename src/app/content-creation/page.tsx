import ScrollToTop from "@/components/common/scroll-to-top";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ContentCreation from "@/components/services/content-creation";
import Wrapper from "@/layout/Wrapper";

const index = () => {
    console.log("Content Creation Page");
    return (
        <Wrapper>
            <ContentCreation />
            <ScrollToTop />
            <WhatsAppButton />
        </Wrapper>
    );
}
export default index;