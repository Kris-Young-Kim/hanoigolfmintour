'use client';

import { useState } from 'react';
import { GOLF_PACKAGES } from '@/lib/constants';

export function GolfPackages() {
  return (
    <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          ⛳ 골프 패키지 안내
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          총 6가지 패키지 | 4인 행사 기준 | 그린피+카트비+캐디피 포함
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOLF_PACKAGES.map((pkg) => {
            const PackageImage = () => {
              const [imageError, setImageError] = useState(false);

              if (imageError) {
                return (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-fairway-green to-golf-green flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <span className="text-5xl block mb-2">⛳</span>
                      <p className="text-sm font-medium">{pkg.hotel}</p>
                    </div>
                  </div>
                );
              }

              return (
                <img
                  src={pkg.image}
                  alt={`${pkg.name} 골프 패키지`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              );
            };

            return (
              <div
                key={pkg.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <PackageImage />
                  <div className="absolute top-4 right-4 bg-vietnam-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.note}
                  </div>
                  {pkg.hotelGrade && (
                    <div className="absolute top-4 left-4 bg-golf-gold/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.hotelGrade}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-fairway-green dark:text-golf-gold font-semibold mb-3">
                    🏨 {pkg.hotel} · {pkg.location}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium uppercase tracking-wide">선택 코스</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-fairway-green/10 text-fairway-green dark:bg-golf-gold/10 dark:text-golf-gold text-xs rounded-full font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1인 요금 (4인 기준)</p>
                      {pkg.price > 0 ? (
                        <p className="text-2xl font-black text-golf-gold">
                          ₩{pkg.price.toLocaleString()}
                        </p>
                      ) : (
                        <p className="text-xl font-black text-golf-gold">
                          {pkg.priceLabel}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
