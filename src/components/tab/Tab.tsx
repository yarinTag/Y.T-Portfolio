'use client';
import React from 'react';

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isPending, startTransition] = React.useTransition();

  const handleTabClick = (index: number) => {
    startTransition(() => setActiveTab(index));
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-around'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-t-lg ${
              index === activeTab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`mt-2 rounded-b-lg p-4 ${isPending ? 'opacity-50' : ''}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
