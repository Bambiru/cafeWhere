import { useRegionStore } from '@/store';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  icon: string;
  keyword: string;
  backgroundColor: string;
}
function CategoryItem({ icon, keyword, backgroundColor }: CategoryItemProps) {
  const { region } = useRegionStore();

  return (
    <figure className="flex w-1/4 flex-col items-center gap-2">
      <Link
        to={`/cafeList/${region}/${keyword}`}
        style={{ backgroundColor: backgroundColor }}
        className="flex h-64pxr w-64pxr items-center justify-center rounded-lg"
      >
        <img src={icon} alt={keyword} />
      </Link>
      <figcaption className="text-sm">{keyword}</figcaption>
    </figure>
  );
}

export default CategoryItem;
