import { rmSync } from "node:fs";

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  rmSync(lockfile, { force: true });
}

const userAgent = process.env.npm_config_user_agent || "";
const execPath = process.env.npm_execpath || "";
const packageManagerSignal = `${userAgent} ${execPath}`.toLowerCase();

if (packageManagerSignal && !packageManagerSignal.includes("pnpm")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
