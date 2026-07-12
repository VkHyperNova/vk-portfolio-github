
export default function OlderProjects({ projects }) {
    if (!projects?.length) return null;

    return (
        <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                Earlier experiments, mostly unmaintained. Kept for reference.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <arctile
                        key={project.slug}
                        id={project.slug}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-500 hover:shadow-sm hover:border-gray-300 dark:hover:border-gray-600 transition scroll-mt-24"
                    >
                        <span className="font-medium">{project.title}</span>
                        <span className="text-gray-400 text-xs">→</span>
                    </arctile>
                ))}
            </div>
        </div>
    )
}