import classNames from "classnames";
import React from "react";

import { Island, islands } from "./islandsInfo";

export default function Islands({
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
}) {
  const commonClasses = classNames(
    "hover:stroke-5 hover:text-accent-primary stroke-0 stroke-current"
  );

  return (
    <svg
      id="islands"
      data-name="galapagos_islands"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1646.89 1024.37"
      className={"cursor-pointer " + className}
    >
      <defs>
        <pattern
          id="island_texture"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image href="/images/island_texture.png" x="0" y="0" />
        </pattern>
      </defs>
      <g fill="url(#island_texture)" id="Islands">
        {islands.map((island: Island) => (
          <path
            key={island.id}
            d={island.d}
            name={island.name}
            className={commonClasses}
            onMouseEnter={() => onMouseEnter && onMouseEnter(island)}
            onMouseLeave={() => onMouseLeave && onMouseLeave(island)}
          />
        ))}
      </g>
    </svg>
  );
}
