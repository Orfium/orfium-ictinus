import React, { useEffect, useState } from 'react';
import AssetMatching from '../../AssetMatching/Assetmatching';
import Mocks from './mocks';
import { rem } from 'polished';
import BulkActionsSection from '../../AssetMatching/components/SectionHeader/SectionHeader';

const BulkActionsShowcase = () => {
  const [checked, setChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const marginValue = rem(10);

  useEffect(() => {
    setChecked(selectedItems.length > 0);
  }, [selectedItems, setChecked]);

  const updateItemCount = (checkedCheckbox: boolean, item: string) => {
    setSelectedItems(prevState =>
      checkedCheckbox ? [...prevState, item] : prevState.filter(i => i !== item)
    );
  };

  const isSelected = (item: string) => selectedItems.some(i => i === item);

  return (
    <div
      css={{
        marginTop: marginValue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <h2>⬇️Bulk actions Showcase⬇️</h2>
      <BulkActionsSection
        isBulkSection
        isChecked={checked}
        isIntermediateStatus={selectedItems.length > 0 && selectedItems.length < 3}
        styleType={'outlined'}
        customActionsContent={
          selectedItems.length === 0 ? <button>Custom Action Element</button> : null
        }
        customCheckboxContent={
          <span css={{ color: 'black' }}>
            {selectedItems.length !== 0
              ? `${selectedItems.length} items selected`
              : 'no items selected'}
          </span>
        }
        buttonStyles={{
          primaryButtonColor: 'lightBlue-400',
          secondaryButtonColor: 'lightBlue-100',
          isButtonFilled: true,
        }}
        matchingActions={selectedItems.length > 0 ? Mocks.actionsMock : []}
        onCheck={checked => {
          setChecked(checked);
          setSelectedItems(checked ? ['1', '2', '3'] : []);
        }}
      />
      <div style={{ marginTop: marginValue }}>
        <div style={{ marginTop: marginValue }}>
          <AssetMatching
            isChecked={isSelected('1')}
            onCheck={checked => {
              updateItemCount(checked, '1');
            }}
            score={95}
            styleType={'outlined'}
            matchedCategoryItems={['George Michael']}
            leftAssetProps={Mocks.leftSideData}
            rightAssetProps={Mocks.rightSideData}
            matchingActions={isSelected('1') ? [] : Mocks.actionsMock}
          />
        </div>
        <div style={{ marginTop: marginValue, marginBottom: marginValue }}>
          <AssetMatching
            isChecked={isSelected('2')}
            onCheck={checked => {
              updateItemCount(checked, '2');
            }}
            score={95}
            styleType={'outlined'}
            matchedCategoryItems={['George Michael']}
            leftAssetProps={Mocks.leftSideData}
            rightAssetProps={Mocks.rightSideData}
            matchingActions={isSelected('2') ? [] : Mocks.actionsMock}
          />
        </div>
        <AssetMatching
          isChecked={isSelected('3')}
          onCheck={checked => {
            updateItemCount(checked, '3');
          }}
          score={95}
          styleType={'outlined'}
          matchedCategoryItems={['George Michael']}
          leftAssetProps={Mocks.leftSideData}
          rightAssetProps={Mocks.rightSideData}
          matchingActions={isSelected('3') ? [] : Mocks.actionsMock}
        />
      </div>
    </div>
  );
};

export default BulkActionsShowcase;
