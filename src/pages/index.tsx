import Table from "@/components/Table";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <main>
      <section
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <NavBar />
        <main
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Table />
        </main>
      </section>
    </main>
  );
}
