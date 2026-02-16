import ProjectCard from "@/components/project-card";

export default function WorksPage() {
    return <div className="flex flex-1 justify-center items-center gap-x-8 xl:gap-x-24 px-5">
            <ProjectCard title="Muzario" link="https://play.google.com/store/apps/details?id=com.solipses.muzario" source="none" image="/muzarioapp.png" />
            <ProjectCard title="Hometown Happenings" link="https://hometown-happenings.vercel.app" source="none" image="/hometownhappenings.png" />
            <ProjectCard title="Artifactle" link="https://artifactle.vercel.app" source="none" image="/artifactle.png" />
            <ProjectCard title="Artifact Scraper" link="https://github.com/Solipses1/ArtifactScraper" source="none" image="/artifactscraper.png" />
        </div>
}