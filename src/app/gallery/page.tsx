
import Upload from "./upload";
import cloudinary from "cloudinary";
import View from "./view";
import { CldImage } from "next-cloudinary";

interface MyImage {
  public_id: string;
}

const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
     .max_results(30)
    .execute()) as { resources: MyImage[] };

  console.log(res);
  return (
    <>
      <div className="py-2 px-2 flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight ml-4 pt-2">
          Gallery
        </h2>
        <Upload />
      </div>
      <div className=" grid grid-cols-4 gap-4">
          {res.resources.map((item, i)=>{
            return <div key={item.public_id}>
              
              <View src={item.public_id} />
            </div>
          })}
      </div>
    </>
  );
};

export default Page;
