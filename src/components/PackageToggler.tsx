import { useState } from "react";

const managers = [
  { name: "npm", command: "npm install @discordcf/framework" },
  { name: "yarn", command: "yarn install @discordcf/framework" },
  { name: "pnpm", command: "pnpm install @discordcf/framework" },
];

const PackageToggler = (): JSX.Element => {
  const [packageManager, setPackageManager] = useState("npm");

  const selectPackageManager = (event: any): void => {
    setPackageManager(event.target.value);
  };

  return (
    <>
      <div className="flex gap-2 border-b-2 mt-4 border-[#d0d0fea4] pb-2 dark:border-[var(--dark-accent)]">
        {managers.map((m) => (
          <button
            className={`rounded-md py-1 px-6 ${
              packageManager === m.name
                ? "border-2 border-[#d0d0fea4] bg-[#d0d0fea4] dark:border-[var(--dark-accent)] dark:bg-[var(--dark-bg-accent)]"
                : ""
            }`}
            onClick={selectPackageManager}
            value={m.name}
          >
            {m.name}
          </button>
        ))}
      </div>
      {managers.map((m) => (
        <span className={`${packageManager === m.name ? "" : "hidden"}`}>
          <pre className="my-4">
            <code className="flex flex-col">
              <span className="text-[#546e7a]"># install discordcf in your project</span>
              {m.command}
            </code>
          </pre>
        </span>
      ))}
    </>
  );
};

export default PackageToggler;
