import { ReactNode } from 'react';

type categoryName = {
  children: ReactNode;
};

function CategoryListName({ children }: categoryName) {
  return (
    <>
      <h2 className="mb-4 ml-5 min-w-375pxr max-w-680pxr text-20pxr font-semibold leading-5">
        {children}
      </h2>
    </>
  );
}

export default CategoryListName;
