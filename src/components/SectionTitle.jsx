function SectionTitle({ title }) {
  return (
    <>
      <p className="eyebrow">Selected work</p>
      <h1 className="display-font mt-4 text-5xl tracking-tight text-[#18332e] sm:text-6xl">
        {title}
        <span className="text-[#087f6e]">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66746e] sm:text-base">
        A selection of things I’ve built, the problems they explore, and the
        tools I used along the way.
      </p>
    </>
  );
}

export default SectionTitle;
