import Landing from "@/components/home/Landing";
import CskShare from "@/components/home/CskShare";
import Faqs from "@/components/home/Faqs";
import OurHomeBlogs from "@/components/home/OurHomeBlogs";

export default function Home() {
    return (
        <div>
            <Landing />
            <CskShare />
            <Faqs/>
            <OurHomeBlogs />
        </div>
    );
}
