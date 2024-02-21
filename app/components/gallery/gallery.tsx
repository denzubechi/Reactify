import Image from 'next/image';
import Image1 from '../../../media/Frame 18367.png';
import Image2 from '../../../media/Frame 18368.png';
import Image3 from '../../../media/Frame 18369.png';
import Image4 from '../../../media/Frame 18371.png';
import Image5 from '../../../media/Frame 18372.png';
import Image6 from '../../../media/IMG-1871.jpg';
import Background from '../../../media/freee.jpg';
const MasonryGallery: React.FC = () => {
  // Array of images
  const images1 = [Image1, Image2, Image3];
  const images2 = [Image6,, Image5, Image4];

  return (
    <div className="mt-4 py-4"
    style={{  
    background:`url(${Background.src})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"}}>
          <div className="mx-auto max-w-screen-sm text-center px-2 py-4 pt-8">
            <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-bold leading-tight text-gray-200 ">Recent Products</h2>
        </div>
        <div className="flex my-4 justify-center items-center">
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-4">
        
            {images1.map((image, index) => (
              <div className="relative group cursor-pointer">
                  <div key={index}>
                      <Image src={image} alt="" width={200}  className="h-auto max-w-full rounded-lg" />
                  </div>
              </div>
              
            ))}
          
         
            {images2.map((image, index) => (
              <div className="relative group cursor-pointer">
                  <div key={index}>
                      <Image src={image} alt="" width={200} className="h-auto max-w-full rounded-lg" />
                  </div>
              </div>
            ))}
          </div>
        </div>
    
    </div>
  
  );
};

export default MasonryGallery;
