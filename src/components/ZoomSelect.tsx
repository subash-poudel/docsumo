/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../atoms/themeAtom";
import { ZOOM_OPTIONS } from "../models/constants";

export function ZoomSelect({
  setZoomLevel,
  zoomLevel,
}: {
  setZoomLevel: (zoom: { label: string; value: string }) => void;
  zoomLevel: { label: string; value: string };
}) {
  const isDarkMode = useRecoilValue(themeAtom);
  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: isDarkMode ? "#374151" : "#ffffff", // Tailwind's dark gray for dark mode
      borderColor: isDarkMode ? "#4B5563" : "#D1D5DB",
      color: isDarkMode ? "#ffffff" : "#000000",
      boxShadow: "none",
      "&:hover": {
        borderColor: isDarkMode ? "#6B7280" : "#9CA3AF",
      },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: isDarkMode ? "#1F2937" : "#ffffff", // Tailwind's dark gray for dropdown
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    singleValue: (base: any) => ({
      ...base,
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    option: (base: any, { isFocused }: { isFocused: boolean }) => ({
      ...base,
      backgroundColor: isFocused
        ? isDarkMode
          ? "#374151"
          : "#E5E7EB"
        : isDarkMode
        ? "#1F2937"
        : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
  };
  return (
    <Select<{ label: string; value: string }>
      key={isDarkMode ? 1 : 0}
      options={ZOOM_OPTIONS}
      placeholder="Select zoom level"
      value={zoomLevel}
      onChange={(v) => {
        if (v) {
          setZoomLevel(v);
        }
      }}
      styles={customStyles}
    />
  );
}
