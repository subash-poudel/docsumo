export function FieldBanner({ title }: { title: string }) {
  const firstLetters = title
    .split(" ")
    .map((s) => s.charAt(0))
    .join("")
    .toUpperCase();
  return (
    <div className="flex flex-col items-center justify-center h-8 bg-red-500 rounded-md align-middle">
      <h1 className="text-xl font-bold text-white p-2">{firstLetters}</h1>
    </div>
  );
}
