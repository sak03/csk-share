import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Landing from "@/components/home/Landing";
import HomeWorkExp from "@/components/home/HomeWorkExp";

export default function Home() {
    return (
        <div>
            <Landing />
            <HomeWorkExp />
            <HomeProjects />
            <HomeSkills />
        </div>
    );
}
