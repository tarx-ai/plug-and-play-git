import HomePage from "@/templates/HomePage";
import CanvasDemo from "@/components/CanvasDemo";

export default function Home() {
  return (
    <div>
      <HomePage />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <CanvasDemo />
      </div>
    </div>
  );
}
