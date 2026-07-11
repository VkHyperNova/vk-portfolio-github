type RepoInfo = {
  pushedAt: string | null;
};

export async function getLastUpdated(githubUrl: string): Promise<RepoInfo> {
  try {
    const { pathname } = new URL(githubUrl);
    const [, owner, repo] = pathname.split("/"); // "/owner/repo"

    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // cache 1 hour
    });

    if (!res.ok) return { pushedAt: null };

    const data = await res.json();
    return { pushedAt: data.pushed_at ?? null };
  } catch {
    return { pushedAt: null };
  }
}

export function formatRelativeDate(dateStr: string | null) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (days === 0) return "Updated today";
  if (days === 1) return "Updated yesterday";
  if (days < 30) return `Updated ${days}d ago`;
  if (days < 365) return `Updated ${Math.floor(days / 30)}mo ago`;
  return `Updated ${Math.floor(days / 365)}y ago`;
}