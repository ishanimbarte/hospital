import anaesthesia from "../../assets/Department/img1.png";
import cardiology from "../../assets/Department/img2.png";
import neurology from "../../assets/Department/img3.png";
import psychiatry from "../../assets/Department/img4.png";
import radiology from "../../assets/Department/img5.png";
import Ent from "../../assets/Department/img6.png";
import dermatology from "../../assets/Department/img7.png";
import urology from "../../assets/Department/img8.png";
import gynaecology from "../../assets/Department/img9.png";
import nephrology from "../../assets/Department/img10.png";
// import all 34 images the same way

const departments = [
  { name: "Anaesthesiology", slug: "anaesthesiology",  image: anaesthesia, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Cardiology", slug: "cardiology", image: cardiology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Neurology", slug: "neurology", image: neurology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Psychiatry", slug: "psychiatry", image: psychiatry, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Radiology", slug: "radiology", image: radiology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "ENT", slug: "ent", image: Ent, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Dermatology", slug: "dermatology", image: dermatology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Urology", slug: "urology", image: urology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Gynaecology", slug: "gynaecology", image: gynaecology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  { name: "Nephrology", slug: "nephrology", image: nephrology, description: "Heart-related diagnosis, treatment, and surgery services.", },
  // ...total 34
];

export default departments;
