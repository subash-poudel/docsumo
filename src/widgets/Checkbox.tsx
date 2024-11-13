export function Checkbox() {
  return (
    <label className="inline-flex items-center">
      <input type="checkbox" className="hidden peer" />
      <div className="w-4 h-4 border border-gray-300 rounded-sm bg-white peer-checked:bg-blue-600 peer-checked:border-transparent peer-checked:text-white">
        <svg className="hidden peer-checked:block w-3 h-3" viewBox="0 0 10 10">
          <path d="M0 4.688l1.414 1.414L4.688 7.375 9 2.313 7.586 0.891 4.688 4.688z" />
        </svg>
      </div>
      <span className="ml-2 text-gray-900">Check me</span>
    </label>
  );
}
