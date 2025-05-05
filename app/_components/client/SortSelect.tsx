'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') || 'latest';
  const handleSort = (value: string) => {
    // get all the current search params
    const params = new URLSearchParams(searchParams.toString());
    // change only the sort value
    params.set('sort', value); 
    router.push(`/?${params.toString()}`);
  };

  return (
    <Select value={sort} onValueChange={handleSort}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Sorting" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="latest">Latest</SelectItem>
      <SelectItem value="oldest">Oldest</SelectItem>
    </SelectContent>
  </Select>
  )
}
