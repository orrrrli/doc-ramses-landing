interface InkUnderlineProps {
  active: boolean;
}

export function InkUnderline({ active }: InkUnderlineProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`ink-underline${active ? " ink-active" : ""}`}
      style={{ display: "block", width: "33%", height: "12px", transform: "rotate(3deg)", transformOrigin: "left center" }}
    >
      <defs>
        <filter id="ink-brush" x="-5%" y="-120%" width="110%" height="340%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65 0.35"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#ink-brush)">
        <path
          d="M 0,3.5 Q 50,3 100,4.5"
          fill="none"
          stroke="#00bfa5"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
          vectorEffect="non-scaling-stroke"
          className="ink-line"
        />
        <path
          d="M 0,7.5 Q 55,7.5 100,9"
          fill="none"
          stroke="#00bfa5"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeOpacity="0.45"
          vectorEffect="non-scaling-stroke"
          className="ink-line ink-line-delay"
        />
      </g>
    </svg>
  );
}
