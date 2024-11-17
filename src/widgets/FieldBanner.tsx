export function FieldBanner({ title, color }: { title: string, color: string }) {
  const firstLetters = title
    .split(" ")
    .map((s) => s.charAt(0))
    .join("")
    .toUpperCase();
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col items-center justify-center h-8 rounded-md align-middle"
    >
      <h1 className="text-xl font-bold text-black p-2">{firstLetters}</h1>
    </div>
  );
}
