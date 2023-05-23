export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="flex justify-end py-6 px-10">
        <button className="hover:bg-gray-1 px-2 py-2">Sign in</button>
      </nav>

      {children}
    </section>
  );
}
