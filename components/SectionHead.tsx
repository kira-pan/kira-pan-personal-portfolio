/** The opening of every section: a 2px ink rule, then "01 — FEATURES" left and "p. 04" right. */
export default function SectionHead({
  number,
  title,
  page,
  onInk = false,
}: {
  number?: string;
  title: string;
  page: string;
  onInk?: boolean;
}) {
  return (
    <div
      className={`label mb-10 flex justify-between border-t-2 pt-3 ${onInk ? "border-paper" : "border-ink"}`}
    >
      <span>{number ? `${number} — ${title}` : title}</span>
      <span>{page}</span>
    </div>
  );
}
