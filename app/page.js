'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DramaDash from '../lib/dramaDash';

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dd = await new DramaDash().init();
      const data = await dd.getHome();
      setHomeData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-20">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      {homeData?.data?.banner && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeData.data.banner.map((drama) => (
              <Link key={drama.id} href={`/drama/${drama.id}`}>
                <div className="drama-card bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={drama.poster} 
                    alt={drama.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{drama.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{drama.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{drama.viewCount} views</span>
                      {drama.tags && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                          {drama.tags[0]}
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      {drama.gendres?.slice(0, 2).map((genre, idx) => (
                        <span key={idx} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs mr-1">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Trending Section */}
      {homeData?.data?.trending && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {homeData.data.trending.map((drama) => (
              <Link key={drama.id} href={`/drama/${drama.id}`}>
                <div className="drama-card">
                  <img 
                    src={drama.poster} 
                    alt={drama.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h4 className="mt-2 text-sm font-medium">{drama.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Dramas Section */}
      {homeData?.data?.drama && (
        <section>
          <h2 className="text-2xl font-bold mb-4">All Dramas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {homeData.data.drama.map((drama) => (
              <Link key={drama.id} href={`/drama/${drama.id}`}>
                <div className="drama-card">
                  <img 
                    src={drama.poster} 
                    alt={drama.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h4 className="mt-2 text-sm font-medium">{drama.name}</h4>
                  <p className="text-xs text-gray-500">{drama.viewCount} views</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
