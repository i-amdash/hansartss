import PaintingList from '@/components/painting-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getPainting from '@/actions/get-painting';
import getPaintings from '@/actions/get-paintings';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface PaintingPageProps {
  params: {
    paintingId: string;
  },
}

const PaintingPage: React.FC<PaintingPageProps> = async ({ 
  params
 }) => {
  const painting = await getPainting(params.paintingId);
  const suggestedPaintings = await getPaintings({ 
    categoryId: painting?.category?.id
  });

  if (!painting) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={painting.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={painting} />
            </div>
          </div>
          <hr className="my-10" />
          <PaintingList title="Related Items" items={suggestedPaintings} />
        </div>
      </Container>
    </div>  
  )
}

export default PaintingPage;
