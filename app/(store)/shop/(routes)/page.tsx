import getBillboard from "@/actions/get-billboard";
import getPaintings from "@/actions/get-paintings";
import PaintingList from "@/components/painting-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const paintings = await getPaintings({ isFeatured: true });
  const billboard = await getBillboard("06af1bb4-d2ba-4859-ae7a-b020c3e9093b");

  return (
    <Container>
      <div className="space-y-10 pb-20 sm:pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <PaintingList title="Featured Paintings" items={paintings} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
