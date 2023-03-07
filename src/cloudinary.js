// Import the Cloudinary classes.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

const myImage = new CloudinaryImage("sample", {
  cloudName: "dippdkqlt",
}).resize(fill().width(100).height(150));

Cloudinary.config({
  cloud_name: "dippdkqlt",
  api_key: "372352948655159",
  api_secret: "nryJ4hRQbpw-_8njRR0dz9wWqio",
});

return (
  <div>
    <AdvancedImage cldImg={myImage} />
  </div>
);
