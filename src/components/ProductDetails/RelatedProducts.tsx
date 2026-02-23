// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     price: 125,
//     image: "https://i.imgur.com/8Km9tLL.jpg",
//   },
//   {
//     id: 2,
//     title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     price: 125,
//     image: "https://i.imgur.com/aq39RMA.jpg",
//   },
//   {
//     id: 3,
//     title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     price: 125,
//     image: "https://i.imgur.com/JV1F0Vv.jpg",
//   },
//   {
//     id: 4,
//     title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     price: 125,
//     image: "https://i.imgur.com/9V3aBfF.jpg",
//   },
// ];

// export default function RelatedProducts() {
//   return (
//     <section className="page-container px-4 sm:px-6 lg:px-16 py-14">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h2 className="text-2xl md:text-4xl font-bold uppercase">
//           You may also like
//         </h2>

//         {/* Arrows */}
//         <div className="flex gap-2">
//           <button className="prev-btn w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
//             <ChevronLeft size={20} />
//           </button>
//           <button className="next-btn w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Swiper */}
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         slidesPerView={2}
//         navigation={{
//           prevEl: ".prev-btn",
//           nextEl: ".next-btn",
//         }}
//         pagination={{
//           el: ".custom-pagination",
//           clickable: true,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="bg-[#F4F4F4] rounded-2xl p-4 group hover:shadow-lg transition">
//               {/* Image */}
//               <div className="relative bg-[#ECECEC] rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
//                 <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-br-xl">
//                   New
//                 </span>

//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={300}
//                   height={300}
//                   className="object-contain group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="mt-4 text-sm font-bold uppercase line-clamp-2">
//                 {product.title}
//               </h3>

//               {/* Button */}
//               <button className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
//                 VIEW PRODUCT -{" "}
//                 <span className="text-yellow-400">${product.price}</span>
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Pagination Dots */}
//       <div className="custom-pagination flex justify-center mt-8 gap-2" />
//     </section>
//   );
// }
