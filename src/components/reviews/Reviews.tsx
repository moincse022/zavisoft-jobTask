"use client";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000",
  },
  {
    id: 2,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000",
  },
  {
    id: 3,
    name: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    image:
      "https://images.unsplash.com/photo-1528701800489-20be9c6a0a47?q=80&w=1000",
  },
];

const ProductReviews = () => {
  return (
    <section className="page-container bg-[#e9e9e7] py-[100px]">
      {/* Container */}
      <div className="max-w-[1320px] mx-auto px-[60px]">
        {/* Heading */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black">REVIEWS</h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium">
            SEE ALL
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              {/* Top Content */}
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{review.text}</p>

                  {/* Rating */}
                  <div className="flex items-center mt-3 gap-2">
                    <div className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</div>
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                </div>

                {/* Avatar */}
                <Image
                  src={review.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative h-[250px] w-full">
                <Image
                  src={review.image}
                  alt="review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductReviews;
