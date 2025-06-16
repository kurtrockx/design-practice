import { useState } from "react";
import SortButtons from "./SortButtons";

export default function SortHeader({ headers, link }) {
  const [initialHeaders, setHeaders] = useState(headers);

  function handleChosenHeader(chosenHeader) {
    const filteredHeaders = initialHeaders
      .filter((header) => header.name !== chosenHeader)
      .map((header) => ({ ...header, active: false }));

    const chosenHeaderObject = initialHeaders.find(
      (header) => header.name === chosenHeader,
    );

    const sortedHeader = [
      ...filteredHeaders,
      { ...chosenHeaderObject, active: true },
    ].sort((a, b) => a.order - b.order)

    setHeaders(() => sortedHeader);
  }

  return (
    <div className="flex max-w-dvw items-center justify-between gap-3 px-4 py-6">
      <div className="flex gap-3">
        {initialHeaders.map((h) => (
          <SortButtons
            name={h.name}
            active={h.active}
            onChooseHeader={handleChosenHeader}
            key={h.name}
          />
        ))}
      </div>
      <a
        href="#"
        className="font-semibold underline decoration-2 underline-offset-6"
      >
        {link}
      </a>
    </div>
  );
}
