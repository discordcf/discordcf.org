import { useEffect, useRef, useState } from "react";

interface Props {
  headings: Array<{ text: string; slug: string; depth: number }>;
}

const RightSidebar = ({ headings }: Props): JSX.Element => {
  headings = [{ depth: 2, slug: "overview", text: "Overview" }, ...headings];

  const [currentId, setCurrentId] = useState("overview");
  const topics = useRef<HTMLUListElement>(null);

  const onThisPageId = "on-this-page-heading";

  const activeTheme = "bg-[#149ac9] text-white";

  useEffect(() => {
    if (topics.current === null || topics.current === undefined) return;

    const setCurrent: IntersectionObserverCallback = (entries): void => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageId) continue;
          setCurrentId(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-100px 0% -75%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

    // Observe all the headings in the main page content.
    document.querySelectorAll("article :is(h1,h2,h3)").forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [topics.current]);

  return (
    <aside className="fixed top-24 right-0 w-[var(--theme-rightsidebar-width)]">
      {headings && (
        <nav className="flex flex-col my-4 py-4 overflow-y-scroll text-sm">
          <h2 id={onThisPageId} className="mb-2 pl-2 font-bold">
            On this page
          </h2>
          <ul ref={topics} className="text-slate-300 overflow-auto max-h-[100vh]">
            {headings
              .filter(({ depth }) => depth > 1 && depth < 4)
              .map((heading: { text: string; slug: string }) => (
                <li
                  key={heading.slug}
                  className={`py-1 pl-2 border-l-4 mr-3 border-l-[#4a4c4d7c] hover:border-l-orange-400 hover:border-l-4 ${
                    currentId === heading.slug ? activeTheme : ""
                  }`}
                >
                  <a href={`#${heading.slug}`}>{heading.text}</a>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default RightSidebar;
