import { Input } from "@/components";
import { Search as IconSearch } from "lucide-react";

export default function Search() {
  return (
    <div className="relative">
      <IconSearch
        className="absolute left-2 top-3 h-4 w-4 text-muted-foreground"
        strokeWidth={1.5}
      />
      <Input placeholder="Buscar" className="pl-8" />
    </div>
  );
}
