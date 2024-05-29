import Table from "@/components/Table";

export default function HomePage() {
  return (
    <main>
      <section
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table />
      </section>
    </main>
  );
}
