import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Island, islands } from "./islandsInfo";
import { gsap } from "gsap";
import { ValidModuleNames } from "../types";

export default function Islands({
  className,
  onMouseEnter,
  onMouseLeave,
  onSelect,
  selectedIsland,
}: {
  className?: string;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  onSelect?: Function;
  selectedIsland?: Island["name"];
}) {
  const commonClasses = classNames(
    "hover:stroke-2 hover:text-accent-primary stroke-0 stroke-current"
  );

  const [selected, setSelected] = useState<Island>();
  const selectedRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    console.log("effect on selected island::", selectedIsland);
    setSelected(islands.find((island) => island.name === selectedIsland));
  }, [selectedIsland]);

  useEffect(() => {
    onSelect && onSelect(selected);
    const selectedPath = selectedRef.current;
    let viewBox = "0 0 1648 1024";

    if (selected && selectedPath) {
      let { x, y, width, height } = selectedPath.getBBox();

      const zoomWidth = width + 150;
      const zoomHeight = height + 150;

      let centerX = x + width / 2;
      let centerY = y + height / 2;

      viewBox = [
        zoomWidth / 2 + (centerX - zoomWidth),
        zoomHeight / 2 + (centerY - zoomHeight),
        zoomWidth,
        zoomHeight,
      ].join(" ");
    }

    gsap.to(["#islands", "#islands_background"], {
      duration: 0.6,
      attr: { viewBox },
    });
  }, [selected]);

  const handleIslandClick = (
    event: React.MouseEvent<SVGPathElement>,
    island: Island
  ) => {
    if (!onSelect) return;
    if (selected === island) {
      setSelected(undefined);
    } else {
      setSelected(island);
    }
  };

  return (
    <svg
      width="1647"
      height="1024"
      id="islands"
      viewBox="0 0 1648 1024"
      data-name="galapagos_islands"
      xmlns="http://www.w3.org/2000/svg"
      className={"cursor-pointer overflow-visible " + className}
    >
      <defs>
        <pattern
          id="island_texture"
          patternUnits="userSpaceOnUse"
          width="220"
          height="200"
        >
          <image href="/images/island_texture.png" x="0" y="0" />
        </pattern>
      </defs>
      <rect
        fill="none"
        className="stroke-current text-black stroke-1"
        x="70"
        y="20"
        width="180"
        height="180"
      />
      <g fill="url(#island_texture)" id="Islands" className="w-full">
        {islands.map((island: Island) => (
          <g key={island.name}>
            <path
              ref={island.name === selected?.name ? selectedRef : null}
              onClick={(e) => handleIslandClick(e, island)}
              key={island.id}
              d={island.d}
              name={island.name}
              className={
                commonClasses +
                (selected === island ? " stroke-2 text-accent-primary" : "")
              }
              onMouseEnter={() => onMouseEnter && onMouseEnter(island)}
              onMouseLeave={() => onMouseLeave && onMouseLeave(island)}
            />

            {selected &&
              selected.name === island.name &&
              island.modules &&
              island.modules.map((module) => {
                const Component = module.icon;
                const commonClasses = classNames(
                  "filter drop-shadow-lg animate-fade-in-slow"
                );
                return (
                  <Component
                    key={module.name}
                    onMouseEnter={() => onMouseEnter && onMouseEnter(module)}
                    onMouseLeave={() => onMouseLeave && onMouseLeave(module)}
                    {...getModuleCoordinates(module.name)}
                    className={commonClasses}
                  />
                );
              })}
          </g>
        ))}
      </g>
    </svg>
  );
}

function getModuleCoordinates(name: ValidModuleNames) {
  const mapping = {
    volcano: { x: "490", y: "310" },
    iguana: { x: "550", y: "450" },
    currents: { x: "590", y: "635" },
    lifecycle: { x: "700", y: "760" },
    eruption: { x: "480", y: "790" },
  };
  return mapping[name] || {};
}
