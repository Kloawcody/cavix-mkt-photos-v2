import fs from "fs";
import { execSync } from "child_process";

const url =
  process.env.PACK_TGZ_URL ||
  "https://tmpfiles.org/dl/1788922856.a84dee209bef92c4/wuwF4TrUH52U/cavix-phone-pack.tgz";

console.log("fetching", url);
execSync(`curl -fsSL "${url}" -o pack.tgz`, { stdio: "inherit" });
execSync("tar xzf pack.tgz", { stdio: "inherit" });

if (!fs.existsSync("jpg")) throw new Error("missing jpg/");
console.log("ok", fs.readdirSync("jpg").length, "photos");
