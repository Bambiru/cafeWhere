import { useActiveTabStore } from '@/store';
import { TabButton } from '@/components/atoms';

function CafeInfoTab() {
  const { activeTab, setActiveTab } = useActiveTabStore();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex text-15pxr">
      <TabButton
        active={activeTab === 'info'}
        onClick={() => handleTabClick('info')}
      >
        정보
      </TabButton>
      <TabButton
        active={activeTab === 'review'}
        onClick={() => handleTabClick('review')}
      >
        리뷰
      </TabButton>
    </div>
  );
}

export default CafeInfoTab;
