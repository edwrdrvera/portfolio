import { useEffect, useState } from "react";

const LATITUDE = 49.8951;
const LONGITUDE = -97.1384;
const DAY_MS = 86_400_000;
const J2000 = 2451545;
const UNIX_EPOCH_JD = 2440587.5;
const RAD = Math.PI / 180;
const STARS = [
  [9, 9],
  [17, 4],
  [31, 5],
  [39, 11],
];

const clock = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Winnipeg" });
const formatTime = (ms: number) => clock.format(ms).toLowerCase();

// Sunrise and sunset (epoch ms) in Winnipeg for day `n` after J2000, from the standard sunrise equation.
const sunEvents = (n: number) => {
  const meanNoon = n - LONGITUDE / 360;
  const anomaly = (357.5291 + 0.98560028 * meanNoon) % 360;
  const m = anomaly * RAD;
  const center = 1.9148 * Math.sin(m) + 0.02 * Math.sin(2 * m) + 0.0003 * Math.sin(3 * m);
  const lambda = ((anomaly + center + 180 + 102.9372) % 360) * RAD;
  const transit = J2000 + meanNoon + 0.0053 * Math.sin(m) - 0.0069 * Math.sin(2 * lambda);
  const declination = Math.asin(Math.sin(lambda) * Math.sin(23.4397 * RAD));
  const phi = LATITUDE * RAD;
  const hourAngle = Math.acos(
    (Math.sin(-0.833 * RAD) - Math.sin(phi) * Math.sin(declination)) / (Math.cos(phi) * Math.cos(declination))
  );
  const halfDay = hourAngle / (2 * Math.PI);
  const toMs = (jd: number) => (jd - UNIX_EPOCH_JD) * DAY_MS;
  return { rise: toMs(transit - halfDay), set: toMs(transit + halfDay) };
};

type Sky = { day: boolean; progress: number; rise: number; set: number };

const skyAt = (now: number): Sky => {
  const n = Math.floor(now / DAY_MS + UNIX_EPOCH_JD - J2000);
  const days = [n - 1, n, n + 1].map(sunEvents);
  for (const { rise, set } of days) {
    if (now >= rise && now < set) return { day: true, progress: (now - rise) / (set - rise), rise, set };
  }
  for (let i = 0; i < days.length - 1; i++) {
    const { set } = days[i];
    const { rise } = days[i + 1];
    if (now >= set && now < rise) return { day: false, progress: (now - set) / (rise - set), rise, set };
  }
  return { day: false, progress: 0.5, rise: days[1].rise, set: days[1].set };
};

// Local time in Winnipeg, with the sun or moon drawn where it sits on its arc across the sky right now.
const WinnipegSky = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { day, progress, rise, set } = skyAt(now);
  const angle = Math.PI * (1 - progress);
  const x = 24 + 17 * Math.cos(angle);
  const y = 20 - 17 * Math.sin(angle);

  return (
    <div className="flex items-center gap-2" title={`sunrise ${formatTime(rise)} · sunset ${formatTime(set)}`}>
      <svg viewBox="0 0 48 24" className="h-6 w-12 overflow-visible" aria-hidden>
        <path d="M7 20a17 17 0 0 1 34 0" fill="none" stroke="currentColor" strokeOpacity={0.3} strokeDasharray="1.5 2.5" />
        <path d="M2 20h44" stroke="currentColor" strokeOpacity={0.4} />
        {!day &&
          STARS.map(([sx, sy], i) => (
            <circle key={i} cx={sx} cy={sy} r={0.8} fill="currentColor" className="sky-star" style={{ animationDelay: `${i * 0.7}s` }} />
          ))}
        <g transform={`translate(${x} ${y})`}>
          {day ? (
            <>
              <circle r={5} fill="currentColor" className="sky-glow" />
              <circle r={2.6} fill="currentColor" />
            </>
          ) : (
            <>
              <mask id="sky-moon">
                <rect x={-4} y={-4} width={8} height={8} fill="white" />
                <circle cx={1.4} cy={-1.1} r={2.4} fill="black" />
              </mask>
              <circle r={2.8} fill="currentColor" mask="url(#sky-moon)" />
            </>
          )}
        </g>
      </svg>
      <span className="opacity-60">{formatTime(now)} in winnipeg</span>
    </div>
  );
};

export default WinnipegSky;
