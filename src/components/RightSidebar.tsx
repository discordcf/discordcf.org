import { useEffect, useRef, useState } from "react";

interface Props {
  headings: Array<{ text: string; slug: string; depth: number }>;
}

const RightSidebar = (props: Props): JSX.Element => {
  const { headings } = props;

  const [currentId, setCurrentId] = useState("overview");
  const topics = useRef<HTMLUListElement>(null);

  const onThisPageId = "on-this-page-heading";

  useEffect(() => {
    if (topics.current !== null) return;

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
      rootMargin: "-100px 0% -73%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

    // Observe all the headings in the main page content.
    document.querySelectorAll("article :is(h1,h2,h3)").forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [topics.current]);

  return (
    <aside className="fixed top-24 right-0 w-[var(--theme-sidebar-width)]">
      {headings && (
        <nav className="flex flex-col my-4 py-4 overflow-y-scroll text-sm">
          <h2 id={onThisPageId} className="mb-2 pl-2 font-bold">
            On this page
          </h2>
          <ul ref={topics} className="border-l-2 border-l-red-400 text-slate-300">
            <li className={`py-1 pl-2 ${currentId === "overview" ? "bg-sky-400" : ""}`}>
              <a href="#overview">Overview</a>
            </li>
            {headings
              .filter(({ depth }) => depth > 1 && depth < 4)
              .map((heading: { text: string; slug: string }) => (
                <li className={`py-1 pl-2 ${currentId === heading.slug ? "bg-sky-400" : ""}`}>
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
