import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const ResourceCardSkeleton = () => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-3">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2 mb-4">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-5 w-16" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-16" />
      </div>
    </CardContent>
  </Card>
);

export const PageHeaderSkeleton = () => (
  <div className="text-center mb-12">
    <Skeleton className="h-10 w-64 mx-auto mb-4" />
    <Skeleton className="h-6 w-96 mx-auto" />
  </div>
);

export const FormSkeleton = () => (
  <Card>
    <CardContent className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <div className="space-y-2">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-6 w-20" />
          ))}
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-20 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </CardContent>
  </Card>
);