import Banner from "@/Components/Apps/Home/Banner";
import Featured from "@/Components/Apps/Home/Featured";
import WhyChooseUs from "@/Components/Apps/Home/WhyChooseUs";

export default function Home() {
  return (
    <section>
      <main>
        <Banner />
        <Featured />
        <WhyChooseUs />
      </main>
    </section>
  );
}
