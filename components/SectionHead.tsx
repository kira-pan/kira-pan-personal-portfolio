/** The opening of every section: a 2px rule, then "01 — FEATURES" left and "p. 04" right. */
export default function SectionHead({
  number,
  title,
  page,
  onInk = false,
  compact = false,
}: {
  number?: string;
  title: string;
  page: string;
  onInk?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`label flex justify-between border-t-2 pt-3 ${compact ? "mb-5" : "mb-9"} ${onInk ? "border-paper" : "border-ink"}`}
    >
      <span>{number ? `${number} — ${title}` : title}</span>
      <span>{page}</span>
    </div>
  );
}
