import { useHashtagStore } from '@/store';
import { useState } from 'react';

// 검색 페이지에서만 클릭할 수 있도록 제어
interface Hashtag {
  icon: string;
  keyword: string;
  click?: string;
  id: string;
  test?: string;
  handleClickEvent?: () => void;
}

function Hashtag({
  icon,
  keyword,
  click,
  id,
  test,
  handleClickEvent,
}: Hashtag) {
  const [isClicked, setIsClicked] = useState(false);
  const { hashtag, setHashtag } = useHashtagStore();

  const handleHashtagClick = () => {
    setIsClicked(!isClicked);
    handleClickEvent?.();

    if (isClicked) {
      setHashtag(hashtag.filter((tagId) => tagId !== id));
    } else {
      if (!hashtag.includes(id)) {
        setHashtag([...hashtag, id]);
      }
    }
  };

  // 아이콘 없는 해시태그 클릭 함수
  const toggle = test && isClicked ? ' hidden' : 'bg-[#F9F9F9] text-[#6B6B6B]';

  const className =
    click && isClicked
      ? 'bg-secondary3-colors  text-white'
      : 'bg-[#F9F9F9] text-[#6B6B6B]';

  const isIcon = icon ? <span>{icon}</span> : '';

  return (
    <div
      className={`hashtag-button mb-6pxr mr-1 text-11pxr ${className || toggle} cursor-pointer`}
      onClick={handleHashtagClick}
      // checked={isClicked}
    >
      {isIcon}
      <span>{keyword}</span>
    </div>
  );
}

export default Hashtag;
