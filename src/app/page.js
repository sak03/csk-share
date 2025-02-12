import Landing from "@/components/home/Landing";
import CskShare from "@/components/home/CskShare";
import Faqs from "@/components/home/Faqs";
import OurHomeBlogs from "@/components/home/OurHomeBlogs";
import CskShareTable from "@/components/home/CskShareTable";

export default function Home() {
    return (
        <div>
            <Landing />
            <CskShare />
            <CskShareTable />
            <Faqs/>
            <OurHomeBlogs />
        </div>
    );
}
