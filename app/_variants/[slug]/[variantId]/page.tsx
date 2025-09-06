// This file exists to satisfy routing; real files are generated per-variant by the helper.
// If someone hits a non-existent id, show 404.
import { notFound } from "next/navigation";

export default function NotFoundVariant() {
  notFound();
}
