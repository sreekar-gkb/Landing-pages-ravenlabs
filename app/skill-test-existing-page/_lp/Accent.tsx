// Two-part heading: plain text followed by the purple accent phrase (Copilot pattern).
export function Accent({ title, accent, breakLine = true }: { title: string; accent: string; breakLine?: boolean }) {
  return (<>{title}{breakLine ? <br /> : ' '}<span className="text-[#4A00E1]">{accent}</span></>);
}
