export default function LoadingSkeleton() {
    return (
        <div className="space-y-6">
        {/* Title Skeleton */}
        <div className="h-8 bg-base-300 rounded w-1/3 mx-auto"></div>
  
        {/* Product Card Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-md animate-pulse rounded-lg"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-base-300 rounded-t-lg"></div>
  
              {/* Card Body Skeleton */}
              <div className="card-body space-y-4">
                <div className="h-6 bg-base-300 rounded w-3/4"></div>
                <div className="h-4 bg-base-300 rounded w-1/2"></div>
                <div className="h-4 bg-base-300 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }