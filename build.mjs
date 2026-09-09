import fs from "fs";
import path from "path";
const base = "https://temporary-speedy-nova-jma4qk4.vercel.app";
const files = ["index.html", "gallery.css", "cavix-mark.png", "cavix-marketing-20-photos.zip", "jpg/01-people-construction-feed.jpg", "jpg/02-people-beauty-feed.jpg", "jpg/03-people-retail-feed.jpg", "jpg/04-people-resale-feed.jpg", "jpg/05-people-construction-story.jpg", "jpg/06-location-warehouse.jpg", "jpg/07-location-jobsite.jpg", "jpg/08-location-salon-backbar.jpg", "jpg/09-location-retail-stockroom.jpg", "jpg/10-location-resale-showroom.jpg", "jpg/11-location-warehouse-banner.jpg", "jpg/12-location-jobsite-story.jpg", "jpg/13-product-know-shelf.jpg", "jpg/14-product-construction-today.jpg", "jpg/15-product-beauty-inventory.jpg", "jpg/16-product-item-detail.jpg", "jpg/17-product-industries-banner.jpg", "jpg/18-product-spreadsheet-story.jpg", "jpg/19-location-shop-desk.jpg", "jpg/20-location-beauty-story.jpg"];
for (const f of files) {
  const res = await fetch(base + "/" + f);
  if (!res.ok) throw new Error("fetch failed " + f + " " + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  const dir = path.dirname(f);
  if (dir && dir !== ".") fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(f, buf);
  console.log("wrote", f, buf.length);
}
