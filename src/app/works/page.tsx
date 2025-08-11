import ProjectCard from "@/components/project-card";

export default function WorksPage() {
    return <div className="flex flex-1 justify-center items-center gap-x-8 xl:gap-x-24">
            <ProjectCard title="Hometown Happenings" link="https://hometown-happenings.vercel.app" source="https://github.com/Solipses1/hometown-happenings" image="/hometownhappenings.png" />
            <ProjectCard title="Artifactle" link="https://artifactle.vercel.app" source="https://github.com/Solipses1/artifactle" image="/artifactle.png" />
            <ProjectCard title="Artifact Scraper" link="https://github.com/Solipses1/ArtifactScraper" source="https://github.com/Solipses1/ArtifactScraper" image="/artifactscraper.png" />
        </div>
}